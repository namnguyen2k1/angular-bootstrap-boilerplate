import { Injectable, Signal, signal } from "@angular/core";

type IdType = string | number;

export interface StateType<T> {
  data: T[];
  expired: number;
  loading: boolean;
  error: unknown;
}

export function initialState<T>(): StateType<T> {
  return {
    data: [] as T[],
    expired: 0,
    loading: false,
    error: null,
  };
}

@Injectable()
export class BaseStore<T extends { id: IdType }> {
  readonly #state = signal<StateType<T>>(initialState<T>());

  get snapshot(): StateType<T> {
    return this.#state();
  }

  get state(): Signal<StateType<T>> {
    return this.#state.asReadonly();
  }

  setData(data: T[], expired: number = Date.now() + 3 * 60 * 1000): void {
    // default expired in 3 minutes
    this.#state.update(() => {
      return {
        data: [...data],
        expired,
        loading: false,
        error: null,
      };
    });
  }

  setLoading(loading: boolean) {
    this.#state.update((prev) => {
      return { ...prev, loading };
    });
  }

  setError(error: unknown) {
    this.#state.update((prev) => {
      return { ...prev, error };
    });
  }

  addNewData(item: T): void {
    this.#state.update((prev) => ({
      ...prev,
      data: [...prev.data, item],
    }));
  }

  getDataById(id: IdType): T | null {
    return this.#state().data.find((item) => item.id === id) ?? null;
  }

  updateDataById(id: IdType, updated: Partial<T>): void {
    this.#state.update((prev) => {
      return {
        ...prev,
        data: prev.data.map((item) => {
          return item.id === id ? { ...item, ...updated } : item;
        }),
      };
    });
  }

  deleteDataById(id: IdType): void {
    this.#state.update((prev) => {
      return {
        ...prev,
        data: prev.data.filter((item) => item.id !== id),
      };
    });
  }

  reset(): void {
    this.#state.set(initialState<T>());
  }
}

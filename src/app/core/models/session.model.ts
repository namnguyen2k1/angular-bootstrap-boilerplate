export class Session {
  role = "guest";
  expired: number = Date.now();

  static create(input?: Partial<Session>) {
    const m = new Session();

    m.role = input?.role ?? m.role;
    m.expired = input?.expired ?? m.expired;

    return m;
  }
}

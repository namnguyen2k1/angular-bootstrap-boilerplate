import { Injectable } from "@angular/core";
import { Session } from "../models";

@Injectable()
export class SessionService {
  static session: Session | null;

  static getSession() {
    if (this.session) {
      return this.session;
    }
    const raw: Record<string, unknown> = JSON.parse(localStorage.getItem("session") ?? "{}");
    this.session = Session.create(raw);
    return this.session;
  }

  static isLogIn(): boolean {
    return ["client", "admin"].includes(this.getSession().role);
  }

  static isExpiredSession(): boolean {
    const expired = Date.now() > this.getSession().expired;
    if (expired) {
      alert("session expired!");
      this.logout();
    }
    return expired;
  }

  static isMatchRole(roles: string[]): boolean {
    const role = this.getSession().role;
    return roles.includes(role);
  }

  static login(role: string) {
    this.session = Session.create({
      role,
      expired: Date.now() + 3 * 60 * 1000, // expires in 3 minutes
    });
    localStorage.setItem("session", JSON.stringify(this.session));
  }

  static logout() {
    this.session = null;
    localStorage.removeItem("session");
  }
}

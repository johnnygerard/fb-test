import { inject, Injectable, signal } from "@angular/core";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user = signal<User | null>(null);
  #auth = inject(Auth);

  constructor() {
    this.#auth.onAuthStateChanged((user) => {
      this.user.set(user);
    });
  }

  async register(email: string, password: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.#auth, email, password);
    } catch (e) {
      throw new Error("User registration failed", { cause: e });
    }
  }

  async logIn(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.#auth, email, password);
    } catch (e) {
      throw new Error("User login failed", { cause: e });
    }
  }

  async logOut(): Promise<void> {
    try {
      await this.#auth.signOut();
    } catch (e) {
      throw new Error("User logout failed", { cause: e });
    }
  }
}

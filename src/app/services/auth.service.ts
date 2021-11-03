import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  email: string = "nikhel@gmail.com";
  password: string = "nikhelbisht";
  signedIn: boolean = false;

  constructor(private router: Router) {}

  signIn(email: string, password: string) {
    if (this.email === email && this.password === password) {
      this.signedIn = true;
      this.router.navigate(["/home"]);
    }
  }
  signOut() {
    this.signedIn = false;
    this.router.navigate(["/signin"]);
  }
  isAuthenticated() {
    return this.signedIn;
  }
}

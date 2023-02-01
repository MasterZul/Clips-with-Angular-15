import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor( private auth: AngularFireAuth) {
  }

  inSubmission = false;
  showAlert: boolean = false
  alertMsg = "Please wait! we are logging you in."
  alertColor = 'blue'

  async login() {
    this.inSubmission = true;
    this.showAlert = true
    this.alertMsg = 'Please wait! we are logging you in.'
    this.alertColor = 'blue'

    try {
        await this.auth.signInWithEmailAndPassword(
          this.credentials.email, this.credentials.password
        )
    } catch (e) {
      this.alertMsg = 'We\'re sorry, either the Email or Password was incorrect. Please try again.'
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }
    this.alertMsg = 'Success! you already login.'
    this.alertColor = 'green'
  }
}

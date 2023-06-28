import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../shared/user.class'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }

  // login
  async onLogin(user:User){
    try{
      return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);

    }catch(error){
      console.log('Error en Login', error);
      return undefined;
    }
  }

  //register
  async onRegister(user: User){
    try{
      return await this.afAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
    }catch(error){
      console.log('Error en registro', error);
      return undefined;
    }
  }

}

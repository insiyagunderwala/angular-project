import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from '@firebase/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  login(username: any, password: any){
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  logout(){
    return from(this.auth.signOut());
  }

  signUp(name:any, email:any, password:any){
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({user}) => updateProfile(user, {displayName: name}))
    );
  }

}
import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, from, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {

 private user$$ = new BehaviorSubject<User | undefined>(undefined);
 public user$ = this.user$$.asObservable();
 
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }
  
  subscription: Subscription;

  constructor(private http: HttpClient, private auth: AngularFireAuth) {
    this.subscription = this.user$.subscribe((user) => {
     this.user = user;
   });
  }

  login(params: Login): Observable<any> {
    return from<any>(this.auth.signInWithEmailAndPassword(params.email, params.password))
    .pipe(tap((user) => {
    this.user$$.next(user)
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  })
  );
      
  }
 
register(user: {email: string, password: string}){
  return this.auth.createUserWithEmailAndPassword(user.email, user.password);
}

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}

type Login = {
  email: string;
  password: string;
}

type Register = {
  email: string;
  password: string;
}
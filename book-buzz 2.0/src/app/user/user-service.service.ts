import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  firestore(firestore: any, arg1: string, uid: any) {
    throw new Error('Method not implemented.');
  }
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined | any;
  USER_KEY = '[user]';
  
  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient, private auth: AngularFireAuth) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
      console.log(user);
      
    });
  }


  login(params: Login): Observable<any> {
    return from<any>(
      this.auth.signInWithEmailAndPassword(params.email, params.password)
    ).pipe(
      tap((user) => {
        this.user$$.next(user);
      })
    );
  }

  register(user: { email: string; password: string }) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout(): any {
    return from(this.auth.signOut())
    .pipe(
      tap(() => {
        this.user$$.next(undefined);
        localStorage.removeItem(
          this.USER_KEY
        );
      })
    );
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

type Login = {
  email: string;
  password: string;
};

type Register = {
  email: string;
  password: string;
};
function authState(auth: AngularFireAuth) {
  throw new Error('Function not implemented.');
}

function doc(firestore: (firestore: any, arg1: string, uid: any) => void, arg1: string, uid: any) {
  throw new Error('Function not implemented.');
}

function docData(ref: void): Observable<User> {
  throw new Error('Function not implemented.');
}


import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined | any;

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient, private auth: AngularFireAuth) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  get currentUser(): any {
    const auth = getAuth();
    const useR = auth.currentUser;
    if (useR) {
      const uid = useR.uid;
      const email = useR.email;
      return { uid, email };
    }
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

  register(user: { email: string; password: string; displayName: string }) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout(): any {
    return from(this.auth.signOut()).pipe(
      tap(() => {
        this.user$$.next(undefined);
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

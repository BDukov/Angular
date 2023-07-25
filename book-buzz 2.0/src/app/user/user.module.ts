import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat/';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    NgModule,
    CommonModule,
    UserRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({      
  apiKey: "AIzaSyCVoof7Zi9EijxY0l_uRPjhkvp_wfdi9U8",
  authDomain: "bookbuzz-d98ab.firebaseapp.com",
  databaseURL: "https://bookbuzz-d98ab-default-rtdb.firebaseio.com",
  projectId: "bookbuzz-d98ab",
  storageBucket: "bookbuzz-d98ab.appspot.com",
  messagingSenderId: "36109280894",
  appId: "1:36109280894:web:659d1a0ace07a2e3dcda2f"
    })
  ]
})
export class UserModule { }

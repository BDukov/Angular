import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksModule } from './books/books.module';
import { AngularFireModule } from '@angular/fire/compat'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    BooksModule,
    AngularFireModule.initializeApp({      
      apiKey: "AIzaSyCVoof7Zi9EijxY0l_uRPjhkvp_wfdi9U8",
      authDomain: "bookbuzz-d98ab.firebaseapp.com",
      databaseURL: "https://bookbuzz-d98ab-default-rtdb.firebaseio.com",
      projectId: "bookbuzz-d98ab",
      storageBucket: "bookbuzz-d98ab.appspot.com",
      messagingSenderId: "36109280894",
      appId: "1:36109280894:web:659d1a0ace07a2e3dcda2f"
        })    
  ],
  providers: [CoreModule],
  bootstrap: [AppComponent ] 
})
export class AppModule { }

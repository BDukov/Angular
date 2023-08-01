import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooksModule } from './books/books.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { appInterceptorProvider } from './app.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, ],
  imports: [
    SharedModule,
    BooksModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
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
    }),
    AngularFireAuthModule
  ],
  providers: [CoreModule, appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

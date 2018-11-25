import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HackathonApiProvider } from '../providers/hackathon-api/hackathon-api';
import { FoodPage } from '../pages/food/food';
import { PostsPage } from '../pages/posts/posts';
import { DetailedViewPage } from '../pages/detailed-view/detailed-view';
import { UtilityProvider } from '../providers/utility/utility';
import { RegisterPage } from '../pages/register/register';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    FoodPage,
    PostsPage,
    DetailedViewPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    FoodPage,
    PostsPage, 
    DetailedViewPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HackathonApiProvider,
    UtilityProvider
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth.guard';
import { AppComponent } from './app.component';
import {AuthService } from "./services/auth.service";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {SearchService} from "./services/search.service";
import { SearchResultComponent } from './search-result/search-result.component';
import {SharedDataService} from "./services/sharedData.service";
import {imgFilterPipe} from "./search-result/imgFilterPipe";
import { ShowComponent } from './show/show.component';
import {showPipe} from './show/showPipe';



const routes: Routes = [
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: 'search', component: SearchResultComponent, canActivate: [AuthGuard]
  },
  {
    path: 'show/:id', component: ShowComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    SearchResultComponent,
    imgFilterPipe,
    ShowComponent,
    showPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)],
  providers: [AuthGuard,SearchService, AuthService,SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

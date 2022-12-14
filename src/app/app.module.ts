import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoronaComponent } from './corona/corona.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { HttpClientModule} from '@angular/common/http';


const myroutes=[
  {path:"",component:CoronaComponent},
  {path:"viewlist",component:ViewlistComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CoronaComponent,
    NavbarComponent,
    ViewlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

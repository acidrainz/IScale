import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsService } from "./contacts.service";

import 'rxjs';
import './rxjs-operators';
import { SearchFilterComponent } from './search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    RatingModule.forRoot(),
    FormsModule,
    HttpModule,

  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

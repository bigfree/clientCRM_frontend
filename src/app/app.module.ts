import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';
import { AppAsideComponent } from './app-aside/app-aside.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientAddComponent } from './clients/client-add/client-add.component';

@NgModule({
  declarations: [
	AppComponent,
	ClientsComponent,
	AppAsideComponent,
	AppHeaderComponent,
	ClientDetailComponent,
	ClientAddComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	GraphQLModule,
	HttpClientModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

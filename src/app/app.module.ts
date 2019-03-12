import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';
import { AppAsideComponent } from './app-aside/app-aside.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientAddComponent } from './clients/client-add/client-add.component';
import { EmailTemplateComponent } from './clients/email-template/email-template.component';
import { PhoneTemplateComponent } from './clients/phone-template/phone-template.component';

@NgModule({
  declarations: [
	AppComponent,
	ClientsComponent,
	AppAsideComponent,
	AppHeaderComponent,
	ClientDetailComponent,
	ClientAddComponent,
	EmailTemplateComponent,
	PhoneTemplateComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	GraphQLModule,
	HttpClientModule,
	ReactiveFormsModule,
	NgbAlertModule,
	FontAwesomeModule
  ],
  entryComponents: [
	EmailTemplateComponent,
	PhoneTemplateComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }

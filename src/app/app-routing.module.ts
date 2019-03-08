import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientAddComponent } from './clients/client-add/client-add.component';

const routes: Routes = [
	{ path: 'clients', component: ClientsComponent },
	{ path: 'client/new', component: ClientAddComponent },
	{ path: 'client/:id', component: ClientDetailComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

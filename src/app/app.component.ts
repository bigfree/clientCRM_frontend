import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AllClientsGQL, Client } from "./generated/graphql";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	clients: Observable<Client[]>;

	constructor(private allClientsGQL: AllClientsGQL) {
		this.clients = this.allClientsGQL.watch().valueChanges.pipe(
			map(({data}) => data.clients)
		);
	}
}

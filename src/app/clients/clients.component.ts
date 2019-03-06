import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { AllClientsGQL, Client } from '../generated/graphql';
import { NewClientGQL } from '../generated/graphql';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

	public clients: Observable<Client[]>;
	public clientSubscription: Subscription;
	public clientArr: Client[] = [];

	constructor(
		private allClientsGQL: AllClientsGQL,
		private newClientGQL: NewClientGQL
		) {
		newClientGQL.subscribe(({data}) => {
			this.clientArr = [...this.clientArr, data.clientAdded];
		});
	}

	ngOnInit() {

		// this.clientsSubscription = this.apollo.subscribe({
		// 	query: this.allClientsGQL.client
		// }).subscribe(({ data }) => {
		// 	this.clients = [...this.clients, data.clients];
		// });

		this.clients = this.allClientsGQL.watch().valueChanges.pipe(
			map(({data}) => data.clients)
		);
	}

}

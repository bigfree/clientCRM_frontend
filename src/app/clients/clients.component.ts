import { QueryRef } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { AllClientsGQL, Client } from '../generated/graphql';
import { NewClientGQL } from '../generated/graphql';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

	// public clients: Observable<Client[]>;
	// public clientSubscription: Subscription;
	// public clientArr: Client[] = [];

	private ClientsQuery: QueryRef<any>;

	public clients: Observable<Client[]>;

	constructor(
		private allClientsGQL: AllClientsGQL,
		private newClientGQL: NewClientGQL
		) {
		// newClientGQL.subscribe(({data}) => {
		// 	this.clientArr = [...this.clientArr, data.clientAdded];
		// });
	}

	ngOnInit() {

		this.clients = this.allClientsGQL.watch().valueChanges.pipe(pluck("data", "clients"));

		// this.clients = this.allClientsGQL.watch().valueChanges.pipe(
		// 	map(({data}) => data.clients)
		// );
	}

}

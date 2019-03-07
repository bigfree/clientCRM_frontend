import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { AllClientsGQL, Client } from '../generated/graphql';
import { NewClientGQL, } from '../generated/graphql';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

	// public clients: Observable<Client[]>;
	// public clientSubscription: Subscription;
	// public clientArr: Client[] = [];

	private clientSub: Subscription;

	public clients: Observable<Client[]>;
	public clientsAdded: Observable<any>;
	public array: any[] = [];

	constructor(
		private allClientsGQL: AllClientsGQL,
		private newClientGQL: NewClientGQL
	) { }

	ngOnInit() {

		// this.clientsAdded = this.newClientGQL.subscribe().pipe(
		// 	map(({data}) => {
		// 		this.array = [...this.array, data.clientAdded];
		// 	})
		// );

		this.newClientGQL.subscribe(({data}) => {
			console.log(data);
		});

		this.clients = this.allClientsGQL.watch().valueChanges.pipe(
			map(({data}) => data.clients)
		);
	}

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { AllClientsGQL, Client } from '../generated/graphql';
import { NewClientGQL, } from '../generated/graphql';

import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const subscription = gql`
	subscription NewClient {
		clientAdded {
			id
			name
			description
		}
	}
`;

interface ClientItem {
	id: string;
	name: string;
	description: string;
};

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {

	// public clients: Observable<Client[]>;
	// public clientSubscription: Subscription;
	// public clientArr: Client[] = [];

	public clientSub: Subscription;
	public clientItems: ClientItem[] = [];
	public clientQuery: QueryRef<any>;

	// public clientTestSub: Subscription;

	// public clients: Observable<Client[]>;
	// public clientsAdded: Observable<any>;
	// public array: any[] = [];

	constructor(
		private allClientsGQL: AllClientsGQL,
		private newClientGQL: NewClientGQL,
		private apollo: Apollo
	) { }

	ngOnInit() {

		this.clientQuery = this.allClientsGQL.watch();

		this.clientSub = this.clientQuery.valueChanges.subscribe(({ data }) => {
			this.clientItems = [...data.clients];
			console.log(this.clientItems);
		});

		this.setupSubscription();
	}

	setupSubscription() {

		// this.clientTestSub = this.newClientGQL.;

		this.clientQuery.subscribeToMore({
			document: subscription,
			updateQuery: (prev, { subscriptionData }) => {
				if (!subscriptionData.data) return prev;

				// console.log(subscriptionData, prev);

				const newClient = subscriptionData.data.clientAdded;

				// return {
				// 	...prev, data: {
				// 		clientItems: [newClient, ...prev.clients]
				// 	}
				// }

				return Object.assign({}, prev, {
					clients: [newClient, ...prev.clients]
				});
			}
		});
	}

	ngOnDestroy() {
		this.clientSub.unsubscribe();
	}

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AllClientsGQL, Client } from '../generated/graphql';
import { NewClientGQL } from '../generated/graphql';

import { QueryRef } from 'apollo-angular';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {

	public clientSub: Subscription;
	public clientItems: Client[] = [];

	private clientQuery: QueryRef<any>;

	constructor(
		private allClientsGQL: AllClientsGQL,
		private newClientGQL: NewClientGQL
	) { }

	ngOnInit() {

		this.clientQuery = this.allClientsGQL.watch({}, {
			fetchPolicy: 'network-only'
		});

		this.clientSub = this.clientQuery.valueChanges.subscribe(({ data }) => {
			this.clientItems = [...data.clients];
		});

		this.setupSubscription();
	}

	setupSubscription() {

		// this.clientTestSub = this.newClientGQL.;

		this.clientQuery.subscribeToMore({
			document: this.newClientGQL.document,
			updateQuery: (prev, { subscriptionData }) => {
				if (!subscriptionData.data) {
					return prev;
				}

				const newClient = subscriptionData.data.clientAdded;

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

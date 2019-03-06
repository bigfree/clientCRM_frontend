import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AllClientsGQL, Client } from '../generated/graphql';
import { NewClientGQL } from "../generated/graphql";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

	clients: Observable<Client[]>;
	lastClient;

	constructor(private allClientsGQL: AllClientsGQL, newClientGQL: NewClientGQL) {
		this.lastClient = newClientGQL.subscribe();

		console.log(this.lastClient);
	}

	ngOnInit() {
		this.clients = this.allClientsGQL.watch().valueChanges.pipe(
			map(({data}) => data.clients)
		);
	}

}

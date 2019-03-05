import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AllClientsGQL, Client } from '../generated/graphql';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

	clients: Observable<Client[]>;

	constructor(private allClientsGQL: AllClientsGQL) {}

	ngOnInit() {
		this.clients = this.allClientsGQL.watch().valueChanges.pipe(
			map(({data}) => data.clients)
		);
	}

}

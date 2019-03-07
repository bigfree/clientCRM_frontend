import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetClientGQL, Client } from '../../generated/graphql';

@Component({
	selector: 'app-client-detail',
	templateUrl: './client-detail.component.html',
	styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

	private taskID: any;

	// public clientObservable: Observable<Client>;
	public client: Client;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private getClientGQL: GetClientGQL
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.taskID = params.id;
		});

		this.getClientGQL.fetch({ id: this.taskID }).subscribe(({ data }) => {
			this.client = data.client;
		});
	}

	// getClientInfo(): Observable<Client> {
	// 	return this.getClientGQL.watch({ id: this.taskID }).valueChanges.pipe(
	// 		map(({data}) => data.client)
	// 	);
	// }

}

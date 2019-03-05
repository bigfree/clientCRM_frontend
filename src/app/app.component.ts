import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AllClientsGQL, ClientInput } from "./generated/graphql";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	clients: Observable<ClientInput[]>;

	constructor(private allClientsGQL: AllClientsGQL) {}

	ngOnInit() {

		this.clients = this.allClientsGQL.watch().valueChanges.pipe(
			map(res => res.data.clients)
		);

		// this.allClientsGQL.watch().valueChanges.subscribe((res) => {
		// 	this.clients = res.data.clients;
		// });

		// this.getClientsGQL.watch().valueChanges.subscribe(({data}) => {
		// 	this.clients = data.getClients;
		// });
		// console.log(this.clients);

		// this.apollo.watchQuery<Response>({query: ClientsQuery}).valueChanges.subscribe((res) => {
		// 	console.log(res.data.getClients);
		// });

		// this.data = this.apollo.watchQuery({query: ClientsQuery}).valueChanges.pipe(map((res) => {
		// 	console.log(res);
		// }));

		// this.data = this.apollo
		// 	.watchQuery({query: ClientsQuery})
		// 	.valueChanges.pipe(map(({data}) => {
		// 		console.log(data);
		// 	}));

		// this.apollo.watchQuery({
		// 	query: gql`
		// 		{
		// 			getClients {
		// 				id
		// 				name
		// 				description
		// 			}
		// 		}
		// 	`,
		// })
		// .valueChanges.subscribe(res => {
		// 	console.log(res);
		// 	this.users = res.data && res.data.getClients;
		// });
	}
}

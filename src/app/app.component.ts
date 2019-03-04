import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const ClientsQuery = gql`
	query clients {
		getClients {
			id
			name
			description
			emails {
				id
				email
			}
			created_at
		}
	}
`;
type Response = {
	getClients: any;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'frontend';

	public clients: any;

	constructor(private apollo: Apollo) {}

	ngOnInit() {

		this.apollo.watchQuery<Response>({query: ClientsQuery}).valueChanges.subscribe((res) => {
			console.log(res.data.getClients);
		});

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

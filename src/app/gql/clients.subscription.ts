import gql from 'graphql-tag';

export const ClientSubscription = gql`
	subscription NewClient {
		clientAdded {
			id
			name
			description
		}
	}
`;

export interface ClientItem {
	id: string;
	name: string;
	description: string;
}

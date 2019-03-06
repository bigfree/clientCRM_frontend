// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
	providedIn: "root"
})
export class AllClientsGQL extends Apollo.Query<
	AllClients.Query,
	AllClients.Variables
> {
	document: any = gql`
		query AllClients {
			clients {
				id
				name
				description
			}
		}
	`;
}
@Injectable({
	providedIn: "root"
})
export class NewClientGQL extends Apollo.Subscription<
	NewClient.Subscription,
	NewClient.Variables
> {
	document: any = gql`
		subscription NewClient {
			clientAdded {
				name
			}
		}
	`;
}

// ====================================================
// END: Apollo Angular template
// ====================================================

export type Maybe<T> = T | null;

export interface ClientInput {
	name?: Maybe<string>;

	description?: Maybe<string>;

	emails?: Maybe<(Maybe<EmailInputs>)[]>;

	phones?: Maybe<(Maybe<PhoneInput>)[]>;
}

export interface EmailInputs {
	email?: Maybe<string>;

	comment?: Maybe<string>;
}

export interface PhoneInput {
	phone?: Maybe<string>;

	comment?: Maybe<string>;
}

export interface TaskInput {
	name: string;

	description?: Maybe<string>;

	completed?: Maybe<boolean>;

	archive?: Maybe<boolean>;
}

export interface UserInput {
	name?: Maybe<string>;

	email?: Maybe<string>;

	password?: Maybe<string>;
}

/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type DateTime = any;

/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export namespace AllClients {
	export type Variables = {};

	export type Query = {
		__typename?: "Query";

		clients: (Maybe<Clients>)[];
	};

	export type Clients = {
		__typename?: "Client";

		id: string;

		name: string;

		description: Maybe<string>;
	};
}

export namespace NewClient {
	export type Variables = {};

	export type Subscription = {
		__typename?: "Subscription";

		clientAdded: Maybe<ClientAdded>;
	};

	export type ClientAdded = {
		__typename?: "Client";

		name: string;
	};
}

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

export interface ResponseMutation {
	code?: Maybe<string>;

	ok: boolean;

	message: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
	_empty?: Maybe<string>;

	client: Client;

	clients: (Maybe<Client>)[];

	task?: Maybe<Task>;

	tasks?: Maybe<(Maybe<Task>)[]>;

	user: User;

	users: (Maybe<User>)[];
}

export interface Client {
	id: string;

	name: string;

	description?: Maybe<string>;

	emails?: Maybe<(Maybe<ClientEmails>)[]>;

	phones?: Maybe<(Maybe<ClientPhones>)[]>;

	created_at?: Maybe<DateTime>;

	deleted_at?: Maybe<DateTime>;

	tasks?: Maybe<(Maybe<Task>)[]>;
}

export interface ClientEmails {
	id: string;

	email?: Maybe<string>;

	comment?: Maybe<string>;
}

export interface ClientPhones {
	id: string;

	phone?: Maybe<string>;

	comment?: Maybe<string>;
}

export interface Task {
	id: string;

	name: string;

	description?: Maybe<string>;

	completed?: Maybe<boolean>;

	archive?: Maybe<boolean>;

	created_at?: Maybe<DateTime>;

	deleted_at?: Maybe<DateTime>;

	client?: Maybe<Client>;
}

export interface User {
	id?: Maybe<string>;

	name?: Maybe<string>;

	email?: Maybe<string>;

	password?: Maybe<string>;
}

export interface Mutation {
	_empty?: Maybe<string>;

	addClient: ClientResponseMutation;

	updateClient: ClientResponseMutation;

	deleteClient: ClientResponseMutation;

	addTask: TaskResponseMutation;

	updateTask: TaskResponseMutation;

	deleteTask: TaskResponseMutation;

	addUser: UserResponseMutation;

	updateUser: UserResponseMutation;

	deleteUser: UserResponseMutation;
}

export interface ClientResponseMutation extends ResponseMutation {
	code?: Maybe<string>;

	ok: boolean;

	message: string;

	client?: Maybe<Client>;
}

export interface TaskResponseMutation extends ResponseMutation {
	code?: Maybe<string>;

	ok: boolean;

	message: string;

	task?: Maybe<Task>;
}

export interface UserResponseMutation extends ResponseMutation {
	code?: Maybe<string>;

	ok: boolean;

	message: string;

	user?: Maybe<User>;
}

export interface Subscription {
	_empty?: Maybe<string>;

	clientAdded?: Maybe<Client>;
}

// ====================================================
// Arguments
// ====================================================

export interface ClientQueryArgs {
	id: string;
}
export interface TaskQueryArgs {
	id: string;
}
export interface UserQueryArgs {
	id: string;
}
export interface AddClientMutationArgs {
	input: ClientInput;
}
export interface UpdateClientMutationArgs {
	id: string;

	input: ClientInput;
}
export interface DeleteClientMutationArgs {
	id: string;
}
export interface AddTaskMutationArgs {
	input: TaskInput;
}
export interface UpdateTaskMutationArgs {
	id: string;

	input: TaskInput;
}
export interface DeleteTaskMutationArgs {
	id: string;
}
export interface AddUserMutationArgs {
	input: UserInput;
}
export interface UpdateUserMutationArgs {
	id: string;

	input: UserInput;
}
export interface DeleteUserMutationArgs {
	id: string;
}

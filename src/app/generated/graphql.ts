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

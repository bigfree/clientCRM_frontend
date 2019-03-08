import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AddClientGQL, ClientResponseMutation } from "../../generated/graphql";

@Component({
	selector: 'app-client-add',
	templateUrl: './client-add.component.html',
	styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {

	public message: String;
	public addClientForm = this.fb.group({
		name: ['', Validators.required],
		description: [''],
	});

	constructor(
		private addClientGQL: AddClientGQL,
		private fb: FormBuilder
	) { }

	ngOnInit() {
	}

	public onSubmit() {
		console.warn(this.addClientForm.value);
		this.addClientGQL
			.mutate({ input: this.addClientForm.value })
			.subscribe(({data}) => {
				this.message = data.addClient.message;
			});
	}

}

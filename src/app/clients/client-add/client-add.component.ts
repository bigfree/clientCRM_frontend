import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AddClientGQL, ClientResponseMutation } from "../../generated/graphql";
import { DomService } from 'src/app/services/dom.service';

import { EmailTemplateComponent } from '../email-template/email-template.component';

@Component({
	selector: 'app-client-add',
	templateUrl: './client-add.component.html',
	styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {

	@ViewChild("emails") emails: TemplateRef<any>;

	public response: ClientResponseMutation;
	public addClientForm = this.fb.group({
		name: ['', Validators.required],
		description: [''],
		company: [''],
		street: [''],
		city: [''],
		psc: [''],
		country: [''],
		ico: [''],
		dic: [''],
		icdph: [''],
		post_company: [''],
		post_street: [''],
		post_city: [''],
		post_psc: [''],
		post_country: ['']
	});

	constructor(
		private addClientGQL: AddClientGQL,
		private fb: FormBuilder,
		private domService: DomService
	) { }

	ngOnInit() {
	}

	public onSubmit() {
		console.warn(this.addClientForm.value);
		this.addClientGQL
			.mutate({ input: this.addClientForm.value })
			.subscribe(({data}) => {
				this.response = data.addClient;
			});
	}

	public addComponent(component) {
		const componentDOM = this.domService.getComponent(EmailTemplateComponent);

		document.querySelector(".attach-list__email").append(componentDOM);
	}

}

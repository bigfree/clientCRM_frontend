import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss']
})
export class EmailTemplateComponent implements OnInit {

	public addEmailForm = this.fb.group({
		email: []
	})

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
	}

}

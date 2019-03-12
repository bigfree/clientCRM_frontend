import { Component, OnInit } from '@angular/core';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-app-aside',
	templateUrl: './app-aside.component.html',
	styleUrls: ['./app-aside.component.scss']
})
export class AppAsideComponent implements OnInit {

	public faHome = faHome;
	public faUser = faUser;

  	constructor() { }

  	ngOnInit() {
	}

}

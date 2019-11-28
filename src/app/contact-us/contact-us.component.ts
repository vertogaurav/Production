import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name:any;
  email:any;
  phone:any;
  submitquery:any;
  constructor() { }

  ngOnInit() {
  }

}

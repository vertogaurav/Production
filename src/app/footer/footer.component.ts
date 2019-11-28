import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  name: string;
  email: any;
  phone: number;
  msg: string;
  ngOnInit() {
  }
  submitquery() {
    this.name = '';
    this.email = '';
    this.phone = null;
    this.msg = '';
    console.log("send")
  }

}


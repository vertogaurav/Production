import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService: HttpClient) { }
  arrBirds: string[];

  ngOnInit() {
    this.httpService.get('./assets/testimony.json').subscribe(
      data => {
        this.arrBirds = data as string[];	 // FILL THE ARRAY WITH DATA.

      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }


}

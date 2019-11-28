import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private httpService: HttpClient, private router: Router, private route: ActivatedRoute) { }
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
  projects() {
    this.router.navigateByUrl('/projects');
  }

}

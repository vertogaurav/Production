import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  compProjects: string[];
  ongProjects: string[];
  upcProjects: string[];

  ngOnInit() {
    this.httpService.get('./assets/projects.json').subscribe(
      data => {

        this.compProjects = data as string[];	 // FILL THE ARRAY WITH DATA.

      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    this.httpService.get('./assets/ongoing.json').subscribe(
      data => {

        this.ongProjects = data as string[];	 // FILL THE ARRAY WITH DATA.

      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    this.httpService.get('./assets/upcoming.json').subscribe(
      data => {

        this.upcProjects = data as string[];	 // FILL THE ARRAY WITH DATA.

      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}

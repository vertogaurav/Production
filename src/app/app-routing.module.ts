import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  {
    path: 'home', component: HomeComponent
  },
  { path: 'contact', component: ContactUsComponent },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full' //Need to remove later
  },
  {
    path: '**', redirectTo: 'home'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

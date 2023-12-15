import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
{path: '', component: TopheadlineComponent },
{path: 'tech', component: TechComponent },  //top headline and home
{path: 'buzz', component: BusinessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

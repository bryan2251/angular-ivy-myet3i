import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { SkillComponent } from '../skill/skill.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'home', component: HomeComponent },
      { path: 'skill', component: SkillComponent },
      { path: '**', redirectTo: 'home' },
    ]),
  ],
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SkillComponent,
  ],
  exports: [RouterModule],
})
export class RoutingModule {}

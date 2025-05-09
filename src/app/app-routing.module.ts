import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PastorGreetingComponent } from './pastor-greeting/pastor-greeting.component';
import { DoctrinalStatementComponent } from './doctrinal-statement/doctrinal-statement.component';
import { SermonsComponent } from './sermons/sermons.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pastor-greeting',
    component: PastorGreetingComponent,
  },
  {
    path: 'doctrinal-statement',
    component: DoctrinalStatementComponent,
  },
  {
    path: 'sermons',
    component: SermonsComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'events-calendar',
    component: EventsCalendarComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverNavigationComponent } from './navigation/cover-navigation/cover-navigation.component';
import { NavStripesComponent } from './navigation/nav-stripes/nav-stripes.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OfferComponent } from './pages/offer/offer.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { AboutMePdfComponent } from './pages/about-me-pdf/about-me-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverNavigationComponent,
    NavStripesComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    OfferComponent,
    ProjectItemComponent,
    AboutMePdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

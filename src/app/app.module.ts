import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { ConceptComponent } from './concept/concept.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { SuperComponent } from './super/super.component';
import { KeyComponent } from './key/key.component';
import { BlogComponent } from './blog/blog.component';
import { CleaningComponent } from './cleaning/cleaning.component';
import { OptiComponent } from './opti/opti.component';
import { CarWashComponent } from './car-wash/car-wash.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookComponent,
    ConceptComponent,
    FooterComponent,
    TeamComponent,
    SuperComponent,
    KeyComponent,
    BlogComponent,
    CleaningComponent,
    OptiComponent,
    CarWashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesService } from './repositories.service'
import { ProjectsService } from './projects.service';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RepositoriesService, ProjectsService, ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

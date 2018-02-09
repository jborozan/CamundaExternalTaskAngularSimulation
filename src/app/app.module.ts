import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { CamundaService } from './camunda.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatCardModule
  ],
  providers: [CamundaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { CamundaService } from './camunda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private camundaService: CamundaService) {}

  startCamunda() {
    this.camundaService.startCamunda();
  }
}

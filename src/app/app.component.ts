import { Component } from '@angular/core';
import { CamundaService } from './camunda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  workId: string;
  topic: string;
  url: string;
  duration: string;
  maxTask: string;

  constructor(private camundaService: CamundaService) {}

  startCamunda() {
    console.log('WorkId: ' + this.workId + 'Max Id: ' + this.maxTask +
     ' Topic: ' + this.topic + ' URL: ' + this.url + ' Duration: ' + this.duration);
    this.camundaService.startCamunda(this.workId, this.maxTask, this.topic, this.url, this.duration);
  }
}

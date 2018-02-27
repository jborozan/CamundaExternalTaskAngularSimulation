import { Component } from '@angular/core';
import { CamundaService } from './camunda.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  workId: string = 'user';
  topic: string  = 'software_installieren';
  url: string = 'http://localhost:8080/rest';
  duration: number = 120 ;
  maxTask: number = 5;
  
  tasks : Task[];

  constructor(private camundaService: CamundaService) {}

  fetchAndLockCamundaTasks() {
    
    this.camundaService.fetchAndLockCamundaTasks(this.workId, this.maxTask, this.topic, this.url, this.duration)
    .map((res: any) => res as Task[])
    .subscribe(
      (res: Task[]) => { this.tasks = res; console.log('AppComponent.fetchAndLockCamundaTasks new Tasks:' + this.tasks);}
    );
  }
  
  completeCamundaTasks() {   
    
    for(var task of this.tasks) {
      this.camundaService.completeCamundaTasks(this.url, this.workId, task.id)
      .subscribe(
        res => {
          console.log(res);
        }
      );
    }
    
    this.tasks = [];

  }
}

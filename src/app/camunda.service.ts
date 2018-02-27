import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CamundaService {
  
  constructor(private http: HttpClient) { }

  fetchAndLockCamundaTasks(workId: string, maxTask: number, topic: string, url: string, duration: number) {
    console.log('CamundaService.fetchAndLockCamundaTasks:' + ' worker id: ' + workId + ' maxTask: ' + maxTask +
    ' topic: ' + topic + ' url: ' + url + ' duration: ' + duration);

   const req = this.http.post(url + '/external-task/fetchAndLock', {
      "workerId": workId,
      "maxTasks": maxTask,
      "topics": [{"topicName": topic, "lockDuration": duration*1000}]
    });
    
    return req;
  }
    
   completeCamundaTasks(url: string, workId: string, taskId: string) {
    console.log('CamundaService.completeCamundaTasks:' + ' url: ' + url + ' worker id: ' + workId + ' taskId: ' + taskId);
           
    const req = this.http.post(url + '/external-task/' + taskId + '/complete', {
      "workerId": workId
    });

     return req;
  }

}

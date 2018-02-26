import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CamundaService {

  constructor(private http: Http) { }

  startCamunda(workId: string, maxTask: string, topic: string, url: string, duration: string) {
    console.log('Service: ' + ' worker id: ' + workId + 'maxTask:' + maxTask +
    ' topic: ' + topic + ' url: ' + url + ' duration: ' + duration);

   const req = this.http.post(url + '/external-task/fetchAndLock', {
      topic: topic,
      workId: workId
    })
    .subscribe(
      res => {
        console.log(res);
      }
    );

  }

}

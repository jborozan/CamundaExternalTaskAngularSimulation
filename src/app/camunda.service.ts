import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CamundaService {

  constructor(private http: Http) { }

  startCamunda() {
    console.log('start camunda');

   // this.http.get('http://localhost:8080/engine-rest/process-definition/key/FlowingTripBookingSaga/start', options);
  }

}

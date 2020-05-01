import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    })
};
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient,
              private appService: AppService) { }
  fetchMissions(): Observable<any> {
    return this.http.get<any>
      ('https://aidrone-1250389064.ap-south-1.elb.amazonaws.com/readmissions',
       httpOptions);
  }
  fetchMissionByID(id: any): Observable<any> {
    return this.http.post<any>
      ('https://aidrone-1250389064.ap-south-1.elb.amazonaws.com/readMissionById',
      {
        _id : id
      },
      httpOptions);
  }


}

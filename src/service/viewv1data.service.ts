import {Injectable} from '@angular/core';
import {Http,Response, Headers, RequestOptions} from '@angular/http';
import {observable, Observable} from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class ViewV1Data{
    constructor(public http:Http){}
    getKanbanData() {     
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     let body = JSON.stringify("");
     //return this.http.post('../kanbanTeamResponse.json', body, options ).pipe(map((res: Response) => res.json()));
     return this.http.get('http://localhost:4201/kanbanTeamResponse.json').pipe(map((res: Response) => res.json()));

   }      
   
   getScrumData() {     
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     let body = JSON.stringify("");
     // return this.http.post('../scrumTeamResponse.json', body, options ).pipe(map((res: Response) => res.json()));
     return this.http.get('http://localhost:4201/scrumTeamResponse.json').pipe(map((res: Response) => res.json()));
         
   }
}
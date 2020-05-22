import {Injectable} from '@angular/core';
import {Http,Response, Headers, RequestOptions} from '@angular/http';
import {observable, Observable} from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class ViewV1Data{
    constructor(public http:Http){}
    getKanbanData(employeeName:string,kanbanDate:Date) {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     let body = JSON.stringify("");
     //return this.http.post('http://138.12.28.191:2525/agile/kanban/result/', body, options ).pipe(map((res: Response) => res.json()));
     return this.http.get('http://localhost:4201/kanbanTeamResponse.json').pipe(map((res: Response) => res.json()));

   }      
   
   getScrumData(employeeName:string,sprintNumber:string) {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     let body = JSON.stringify("");
     //return this.http.post('http://138.12.28.191:2525/agile/scrum/result/' + sprintNumber, body, options ).pipe(map((res: Response) => res.json()));
     return this.http.get('http://localhost:4201/scrumTeamResponse.json').pipe(map((res: Response) => res.json()));
         
   }
}
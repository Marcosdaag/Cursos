import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PeticionesService{
    public url: string;

    constructor(public _http: HttpClient){
        this.url = "https://reqres.in/";
    }

    getUser(userId:number):Observable<any>{
        return this._http.get(this.url+'api/users/'+userId);
    }

    addUser(user: any): Observable<any>{
        let params = JSON.stringify(user);
        let cabeceras = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'api/users', params, {headers: cabeceras});
    }

}
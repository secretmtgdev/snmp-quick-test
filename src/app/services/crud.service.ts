import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CrudService {
    constructor(private http: HttpClient) {

    }

    sendTrap(): Observable<any> {
        console.log('sending trap from CRUD.SERVICE.TS');
        return this.http.get('http://localhost:3000/api/sendTrap');
    }
}

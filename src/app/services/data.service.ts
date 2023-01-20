import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private url="http://localhost:3000/products" ;
  constructor(private http:HttpClient) { }

  findAll() {
    return this.http.get(this.url);
  }

  Delete(id:number) {
    return this.http.delete(this.url+"/"+id) ;
  }
}

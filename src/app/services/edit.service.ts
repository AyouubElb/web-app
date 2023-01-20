import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class EditService {
index : number = 0 ;
p!:Products ;
  constructor() { }

  Index(id:number) {
    this.index = id ;
  }

  Enregistrer (produit: Products) {
    this.p = produit ;
    this.p.id = this.index ;
   

  }
}

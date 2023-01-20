import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from '../models/products';
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  name: string = '';
  price: number = 0  ;
  selected: boolean = false;
  promo: boolean= false ;
  produit !: Products  ;

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }

  Retour() {
    this.router.navigate(['product']);
  }

  Enregistrer() {
    
     console.log(this.name, this.price, this.selected, this.promo); 
  

  }




}

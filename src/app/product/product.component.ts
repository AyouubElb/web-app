import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { Products } from '../models/products';
import { DataService } from '../services/data.service';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  keyword :string="" ;

   products !: Products[] ;

   productExemple : Products[] = [
    {
      "id": 1, "name": "Computer", "price": 6500, "promo": true, "selected": false
    },
    {
      "id": 2, "name": "Print", "price": 1800, "promo": true, "selected": false
    },
    {
      "id": 3, "name": "SmartPhone", "price": 3000, "promo": false, "selected": false
    },
    {
      "id": 4, "name": "Smartwatch", "price": 5000, "promo": false, "selected": false
    }
   ] ;


  constructor(private router:Router,private edit_service: EditService) { }

  ngOnInit(): void {
    this.products = [
      {
        "id": 1, "name": "Computer", "price": 6500, "promo": true, "selected": false
      },
      {
        "id": 2, "name": "Print", "price": 1800, "promo": true, "selected": false
      },
      {
        "id": 3, "name": "SmartPhone", "price": 3000, "promo": false, "selected": false
      },
      {
        "id": 4, "name": "Smartwatch", "price": 5000, "promo": false, "selected": false
      }
     ] ;
  }

  deletePromo(product:any) {
    let index=this.products.indexOf(product) ;
    this.products[index].promo = false ;
  }

  promo(product:any) {
    let index=this.products.indexOf(product) ;
    this.products[index].promo = true ;
  }

  select(product:any) {
    let index = this.products.indexOf(product) 
    this.products[index].selected = true ; 
  }

  unSelect(product: any) {
    let index = this.products.indexOf(product) 
    this.products[index].selected = false ;
  }

  deleteProduct(product: any ) {
    let index = this.products.indexOf(product) ;
    this.products.splice(index, 1) ;
  }

  editProduct(product:any) {
      this.router.navigate(['edit-product']) ;
  
  }

  AddProduct() {
    this.router.navigate(['addProduct']) ;
  }

  applyFilter() {

   this.products= this.productExemple.filter(p => p.name.toLowerCase().includes(this.keyword.toLowerCase()));   
  }
}

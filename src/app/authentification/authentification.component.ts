import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  email:string  ='' ;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

 login() {
   this.router.navigate(['product']);
 }

}

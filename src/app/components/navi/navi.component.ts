import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent implements OnInit {

  constructor(private router : Router){}

  ngOnInit():void {

  }

  coffeeSupplies(){
    this.router.navigate(['generalContents/getall']);
  }
}

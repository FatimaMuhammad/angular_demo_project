import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import{ActivatedRoute } from '@angular/router';
// import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-tile',
  templateUrl: './new-tile.component.html',
  styleUrls: ['./new-tile.component.scss']
})
export class NewTileComponent implements OnInit {

  name!: string;
  orderPacked!: number;
  unitsPacked!: number;

  constructor(private route: ActivatedRoute){}
ngOnInit(): void {
  this.route.queryParams.subscribe((params)=>{
    this.name =params['name'];
    this.orderPacked = params ['orderPacked'];
    this.unitsPacked = params ['unitsPacked'];
  })
}



  // data:any;

// constructor(private dataService: DataService){}

// ngOnInit(): void {
//   //get data from service
//   this.data = this.dataService.getData();

//   if(!this.data){
//     console.error('No data Found.');
//   }
// }
}





    
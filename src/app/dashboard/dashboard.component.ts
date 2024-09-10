import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navItems: { image: string, text: string }[] = [];
  // isExpanded = false;

  constructor() { }

  ngOnInit(): void {
    this.navItems = [
      {
        image : 'assets/img/item1.png',
        text: ' Dashboard'
      },
      {
        image: 'assets/img/bullet.png',
        text: 'Inbound'
      },
      {
        image: 'assets/img/bullet.png',
        text: ' Purchase orders'
        
      },
      {
        image: 'assets/img/item1.png',
        text: 'ASN'
      },
      {
        image: 'assets/img/item1.png',
        text: 'Kitting'
      },
      {
        image: 'assets/img/item1.png',
        text: 'Inventory'
      },
      {
        image: 'assets/img/item1.png',
        text: 'orders'
      },
      {
        image: 'assets/img/task.png',
        text: ' outbound'
      },
      {
        image: 'assets/img/outbound.png',
        text: ' outbound'
      },
      {
        image: 'assets/img/task.png',
        text: 'Task'
      },
      {
        image: 'assets/img/checkout.png',
        text: 'Setup'
      },
      {
        image: 'assets/img/settings.png',
        text: ' Settings'
      }






    ];
  }
  // toggleDashboard(){
  //   this.isExpanded =!this.isExpanded;
  // }

}

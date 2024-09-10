import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 data:any;
  constructor(private router: Router) { 
    this.data = this.router.getCurrentNavigation()?.extras.state?.['data'];
  }

  ngOnInit(): void {
    
  }

}
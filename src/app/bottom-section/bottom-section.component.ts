import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss']
})
export class BottomSectionComponent implements OnInit {
  name!: string;
  orderPacked!: number;
  unitsPacked!: number;

  
  // data_one:any;
  displayedColumns: string[] = ['lno', 'lo', 'sku', 'skuQty', 'skuCost', 'uom', 'requiredDate', 'assignTo'];

  // Define data for the table
  dataSource_bot = [
    {
      lno: '1',          // First column data for row 1
      lo: '-',   
      sku1:'TRI-CUP',  // Second column data for row 1
      sku: 'Triwizard Cup',    // Third column data for row 1
      skuQty: '2',       // Fourth column data for row 1
      skuCost: '$1,000.00',    // Fifth column data for row 1
      uom: 'Case',         // Sixth column data for row 1
      requiredDate: 'Aug 30, 2024', // Seventh column data for row 1
      assignTo: '-'        // Eighth column data for row 1
    },
    {
      lno: '2',          // First column data for row 2
      lo: '-',     // Second column data for row 2
      sku1:'SG-A7',
      sku: 'Galaxy A7',    // Third column data for row 2
      skuQty: '2',      // Fourth column data for row 2
      skuCost: '$0.00',    // Fifth column data for row 2
      uom: 'EA',         // Sixth column data for row 2
      requiredDate: 'Aug 30, 2024', // Seventh column data for row 2
      assignTo: '-'      // Eighth column data for row 2
    }
  ];

  
  constructor(
    private route: ActivatedRoute
    // private dataService: DataService
  ) { }

  ngOnInit(): void { 
    //retrieving  query params
    this.route.queryParams.subscribe((params)=>{
      this.name = params ['name'];
      this.orderPacked = params ['orderPacked'];
      this.unitsPacked = params ['unitsPacked'];
    })


    // this.data_one = this.dataService.getData();

    // if(!this.data_one){
    //   console.error('no data')

    }
  }


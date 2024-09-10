import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  name!: string;
  orderPacked!: number;
  unitsPacked!: number;
  // data_one:any;
  data = {
    expectedDate: 'AUG-90',
    vendor:'Nestle',
    shipMethod: '-',
    attachment:'-',
    label2: '-',
    label3: '-',
    unload:'-',
    po:'-',
    recieved:'-',
  };

  constructor(private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    // private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      this.name = params['name'];
      this.orderPacked = params ['orderPacked'];
      this.unitsPacked = params ['unitsPacked'];
    })
    // this.data_one = this.dataService.getData();

    // if(!this.data){
    //   console.error('no data found');
    // }
    
  }
  goBack(){
    this.router.navigate(['/tile']);
  } 

  openDialog() {
    this.dialog.open(DialogComponentComponent);
  }

}

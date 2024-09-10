import { Component, Input, OnInit, OnChanges,SimpleChanges, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit, OnChanges {
 
  isFlipped1 = false;
  isFlipped2 = false;
  isFullScreen: boolean = false;



  flipCard(cardNumber: number) {
    if (cardNumber === 1) {
      this.isFlipped1 = !this.isFlipped1;
    } else if (cardNumber === 2) {
      this.isFlipped2 = !this.isFlipped2;
    }
  }
  @Input() packedUnits: number = 0; // Initialize with a default value
  @Input() pickedUnits: number = 0; // Initialize with a default value
  @Input() shippedUnits: number = 0; // Initialize with a default value
  @Input() unitShipped: number = 0; // Initialize with a default value
  @Input() unitsInQueue: number = 0; // Initialize with a default value

displayedColumns: string[] =['name', 'orderPacked', 'unitsPacked'];
pickersDataSource = new MatTableDataSource<any>();
packersDataSource = new MatTableDataSource<any>();



toggleFullscreen(): void {
  const elem = document.documentElement; // Replace this with the specific element you want to make fullscreen

  // Check if the document is in fullscreen mode
  if (
    document.fullscreenElement || 
    (document as any).webkitFullscreenElement || 
    (document as any).msFullscreenElement
  ) {
    // Currently in fullscreen, exit fullscreen
    if (document.exitFullscreen) {
      this.isFullScreen = false;
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) { // Safari
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) { // IE11
      (document as any).msExitFullscreen();
    } else {
      console.error("Fullscreen API is not supported.");
    }
  } else {
    // Not in fullscreen, enter fullscreen
    if (elem.requestFullscreen) {
      this.isFullScreen = true;
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) { // Safari
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) { // IE11
      (elem as any).msRequestFullscreen();
    } else {
      console.error("Fullscreen API is not supported.");
    }
  }
}



 
    
  
// ]); 
// packersDataSource= new MatTableDataSource([
//   { name: 'Packer X', orderPacked: 'Order#101', unitsPacked: 500 },
//   { name: 'Packer Y', orderPacked: 'Order#102', unitsPacked: 700 },
// ])

@ViewChild('pickersPaginator') pickersPaginator!: MatPaginator;
@ViewChild('packersPaginator') packersPaginator!: MatPaginator;

constructor(
  private router:Router,
  private userService: UserService,
  private dataService: DataService
){

}

ngOnInit(){
  this.loadData();
  // this.pickersDataSource.paginator = this.pickersPaginator;
  //   this.packersDataSource.paginator = this.packersPaginator;
}

ngOnChanges(changes: SimpleChanges) {
  // React to input property changes
  if (changes['packedUnits']) {
    console.log('ngOnChanges - packedUnits changed:', changes['packedUnits'].currentValue);
  }
}

ngAfterViewInit() {
  // Set paginator after view initialization
  this.pickersDataSource.paginator = this.pickersPaginator;
  this.packersDataSource.paginator = this.packersPaginator;
}

private loadData(): void {
  this.userService.getUsers().subscribe(
    (data) => {
      // Transform data to match table structure
      const pickersData = data.map(user => ({
        name: user.name,
        orderPacked: `Order#${user.id}`,
        unitsPacked: user.id * 1000 // Just an example; adjust as needed
      })); 
     const packersData = data.map(user =>({
      name: user.name,
        orderPacked: `Order#${user.id}`,
        unitsPacked: user.id * 1000 
      }));
      //   { name: 'Packer X', orderPacked: 'Order#101', unitsPacked: 500 },
      //   { name: 'Packer Y', orderPacked: 'Order#102', unitsPacked: 700 }
      // ];
      this.pickersDataSource.data = pickersData;
      this.packersDataSource.data = packersData;
    },
    (error) => console.error('Error fetching data:', error)
  );
}
//naviagte the data and pass it into new component
// onNameClick(data: any) {
//   this.router.navigate(['/new-tile'], { state: { data } });
// }

onNameClick(data_one: any) {
  this.router.navigate(['/main'],
  // this.router.navigate(['/new-tile'],
     {
    queryParams: {
      name: data_one.name,
      orderPacked: data_one.orderPacked,
      unitsPacked: data_one.unitsPacked,
    },
  });
}


// onNameClick(data_one: any){
//    this.dataService.setData(data_one);
//    this.router.navigate(['/main']);
//   //  { state: { data } }
// }
  // this.dataService.setData(data);
  // this.router.navigate(['/new-tile']);
}





  


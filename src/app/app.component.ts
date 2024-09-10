import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
[x: string]: number;
  // title = 'testapp';
  packedunits: number = 123;
  pickedUnites: number = 456;
  shippedUnits: number = 789;
  unitShipped: number = 1011;
  unitsInQueue: number = 1213;
}

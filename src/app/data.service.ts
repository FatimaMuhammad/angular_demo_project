import { Injectable } from '@angular/core';

@Injectable({
  //make service available throught the app
  providedIn: 'root'
})
export class DataService {
  //store data here
  private dataa:any;


  setData(dataa:any): void{
    this.dataa = dataa;
  }

  getData(): any{
    return this.dataa;
  }
  clearData():void{
    this.dataa = null;
  }
  constructor() { }
}

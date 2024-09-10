import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { DialogComponentComponent} from './dialog-component.component.spec';
@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent implements OnInit {

  constructor(
    // public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponentComponent>
                
  ) { }

  ngOnInit(): void {
  }
  
  // openDialog() {
  //   this.dialog.open(DialogComponentComponent);
  // }

  closeDialog(){
    this.dialogRef.close();
  }
}

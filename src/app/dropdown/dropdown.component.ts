import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  
})
export class DropdownComponent  {
  Selected: string = '';
  isDropdownOpen = false;

  constructor(private router: Router) { }

  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  logout(event: Event) {
    event.preventDefault();
    console.log('Logout clicked');
    this.Selected='';
    this.isDropdownOpen = false;
    this.router.navigate(['logout']);
  }

}

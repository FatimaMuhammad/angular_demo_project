import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; // Optional, if using MatCard
import {HttpClientModule} from '@angular/common/http';
// import { UserService } from './user.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LogoutComponent } from './logout/logout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NewTileComponent } from './new-tile/new-tile.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component'; 
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
// import { FilterPipe } from './navbar/pipe';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';

import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    
    // FilterPipe,
    AppComponent,
    TileComponent,
    DropdownComponent,
    LogoutComponent,
    NewTileComponent,
    MainComponent,
    DashboardComponent,
    NavbarComponent,
    BottomSectionComponent,
    DetailComponent,
   
    DialogComponentComponent
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule,
    MatTableModule,
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponentComponent] 
})
export class AppModule { }

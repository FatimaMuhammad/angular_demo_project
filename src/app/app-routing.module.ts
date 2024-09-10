import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogoutComponent} from './logout/logout.component';
import { TileComponent } from './tile/tile.component';
import { NewTileComponent } from './new-tile/new-tile.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'tile', component: TileComponent},
  { path: 'logout', component: LogoutComponent },
  { path: 'new-tile', component: NewTileComponent}
  // { path: 'user-detail/:id', component: UserDetailComponent }
  // { path: '**', redirectTo: '/tile'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

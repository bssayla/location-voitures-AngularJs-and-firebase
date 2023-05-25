import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import  {LocationComponent} from './components/location/location.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: "client", component: ClientComponent },
  { path: "voiture", component: VoitureComponent },
  { path: "location", component: LocationComponent },
  { path: "search", component: SearchComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

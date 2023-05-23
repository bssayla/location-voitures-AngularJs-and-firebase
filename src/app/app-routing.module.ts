import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import  {LocationComponent} from './components/location/location.component';
const routes: Routes = [
  { path: "client", component: ClientComponent },
  { path: "voiture", component: VoitureComponent },
  { path: "location", component: LocationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

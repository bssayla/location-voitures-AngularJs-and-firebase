import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import 'firebase/database'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-projet';
  constructor( ) {
    
  }
}

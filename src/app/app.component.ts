import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LAB4MM';

  tekstWZmiennej = "Tekst w zmiennej!"

  cars = [ 'Audi', 'BMW', 'Mitsubishi', 'Ford', 'Seat', 'Mazda', 'Mercedes-Benz' ]
  
  osoby = [ 'Kasia', 'Basia', 'Zosia', 'Tomek', 'Marek', 'Antek' ];

}

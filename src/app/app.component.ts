import { Component } from '@angular/core';
import { DaneOsobyService } from './services/dane-osoby.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  osoby: string[] = [ 'Kasia', 'Basia', 'Zosia', 'Tomek', 'Marek', 'Antek' ]

  constructor(private daneOsobyService: DaneOsobyService) {}

  ngOnInit() {
    this.daneOsobyService.dajOsoby().subscribe(
      osoby => {
        this.osoby.push(osoby[1])
      })
  }

  title = 'LAB4MM';

  tekstWZmiennej = "Tekst w zmiennej!"

  cars = [ 'Audi', 'BMW', 'Mitsubishi', 'Ford', 'Seat', 'Mazda', 'Mercedes-Benz' ]
  

}

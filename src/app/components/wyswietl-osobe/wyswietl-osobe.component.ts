import { Component, OnInit } from '@angular/core';
import { DaneOsobyService } from 'src/app/services/dane-osoby.service';

@Component({
  selector: 'app-wyswietl-osobe',
  templateUrl: './wyswietl-osobe.component.html',
  styleUrls: ['./wyswietl-osobe.component.scss']
})
export class WyswietlOsobeComponent implements OnInit {
  osoby: string[]
  
  constructor(private daneOsobyService: DaneOsobyService) { }
  
  ngOnInit() {
    this.daneOsobyService.dajOsoby().subscribe(
      osoby => this.osoby = osoby)
  }
  
  onReset() {
    this.daneOsobyService.reset()
  }
  // ZADANIE 2 start
  onDiscard(osoba: string) {
    console.log('Odrzucam osobę: ' + osoba)
    this.daneOsobyService.odrzucOsobeWyswietl(osoba)
  }
  // ZADANIE 2 end
  //
  // ZADANIE 3 start
  onRemove(osoba: string) {
    console.log('Usuwam osobę: ' + osoba)
    this.daneOsobyService.usunOsobeWyswietl(osoba)
  }
  // ZADANIE 3 end

}

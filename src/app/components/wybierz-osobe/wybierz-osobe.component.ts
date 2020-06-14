import { Component, OnInit, Input } from '@angular/core';
import { DaneOsobyService } from 'src/app/services/dane-osoby.service';

@Component({
  selector: 'app-wybierz-osobe',
  templateUrl: './wybierz-osobe.component.html',
  styleUrls: ['./wybierz-osobe.component.scss']
})
export class WybierzOsobeComponent implements OnInit {

  @Input() osoby: string[]

  constructor(private daneOsobyService: DaneOsobyService) { }

  ngOnInit(): void {
    this.daneOsobyService.dodajOsobyWybierz(this.osoby)
    this.daneOsobyService.dajOsobyWybierz().subscribe(osoby => {
      this.osoby = osoby
    })
  }
  onAdd(osoba: string) {
    console.log('Dodaje osobę: ', osoba);
    this.daneOsobyService.dodajOsobeWyswietl(osoba);
    this.osoby.splice(this.osoby.indexOf(osoba), 1)
  }
  /// ZADANIE 3 start
  onRemove(osoba: string) {
    console.log('Usuwam osobę: ' + osoba)
    this.daneOsobyService.usunOsobeWybierz(osoba)
  }
  /// ZADANIE 3 end

}
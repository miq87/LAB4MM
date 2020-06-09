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
  }

  onClick(osoba: string) {
    console.log('Dodaje osobę: ', osoba);
    this.daneOsobyService.dodajOsobe(osoba);
    this.osoby.splice(this.osoby.indexOf(osoba), 1)
  }
  /// ZADANIE 3 start
  onRemove(osoba: string) {
    console.log('Usuwam osobę: ' + osoba)
    this.daneOsobyService.usunOsobe(osoba);
  }
  /// ZADANIE 3 end

}

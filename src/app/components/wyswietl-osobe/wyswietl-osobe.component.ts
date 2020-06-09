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

}

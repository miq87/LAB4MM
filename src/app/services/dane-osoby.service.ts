import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaneOsobyService {

  private listaOsob = new Subject<string[]>();
  private osoby: string[] = [];
  constructor() { }

  dodajOsobe(osoba: string) {
    if (!this.osoby.includes(osoba)) {
      this.osoby.push(osoba)
    }
    this.listaOsob.next(this.osoby)
  }
  // ZADANIE 3 - start
  usunOsobe(osoba: string) {
    this.osoby.splice(this.osoby.indexOf(osoba), 1)
    this.listaOsob.next(this.osoby)
  }
  // ZADANIE 3 - end

  dajOsoby(): Observable<string[]> {
    return this.listaOsob.asObservable()
  }

  reset() {
    this.osoby = []
    this.listaOsob.next(this.osoby);
  }

}
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaneOsobyService {

  private listaWybierz = new Subject<string[]>()
  private listaWyswietl = new Subject<string[]>()
  private osobyWybierz: string[] = []
  private osobyWyswietl: string[] = []
  
  constructor() {}

  dodajOsobyWybierz(osoby: string[]) {
    this.osobyWybierz = osoby
    this.listaWybierz.next(osoby)
  }
  dajOsobyWybierz(): Observable<string[]> {
    return this.listaWybierz.asObservable()
  }
  dodajOsobeWyswietl(osoba: string) {
    if (!this.osobyWyswietl.includes(osoba)) {
      this.osobyWyswietl.push(osoba)
    }
    this.listaWyswietl.next(this.osobyWyswietl)
  }
  // ZADANIE 2 - start
  odrzucOsobeWyswietl(osoba: string) {
    this.osobyWyswietl.splice(this.osobyWyswietl.indexOf(osoba), 1)
    this.listaWyswietl.next(this.osobyWyswietl)
    this.osobyWybierz.push(osoba)
    this.listaWybierz.next(this.osobyWybierz)
  }
  // ZADANIE 2 - end
  // ZADANIE 3 - start
  usunOsobeWybierz(osoba: string) {
    this.osobyWybierz.splice(this.osobyWybierz.indexOf(osoba), 1)
    this.listaWybierz.next(this.osobyWybierz)
  }
  usunOsobeWyswietl(osoba: string) {
    this.osobyWyswietl.splice(this.osobyWyswietl.indexOf(osoba), 1)
    this.listaWyswietl.next(this.osobyWyswietl)
  }
  // ZADANIE 3 - end

  dajOsobyWyswietl(): Observable<string[]> {
    return this.listaWyswietl.asObservable()
  }
  resetWyswietl() {
    this.osobyWyswietl = []
    this.listaWyswietl.next(this.osobyWyswietl);
  }

}
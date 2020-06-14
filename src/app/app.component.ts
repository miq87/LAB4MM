import { Component } from '@angular/core';
import { DaneOsobyService } from './services/dane-osoby.service';
import { JsonService } from './services/json.service';
import { PostClass } from './post-class';
import { CommentClass } from './comment-class';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'LAB4MM'
  tekstWZmiennej = "Tekst w zmiennej!"
  cars = [ 'Audi', 'BMW', 'Mitsubishi', 'Ford', 'Seat', 'Mazda', 'Mercedes-Benz' ]
  osoby: string[] = [ 'Kasia', 'Basia', 'Zosia', 'Tomek', 'Marek', 'Antek' ]

  listaWynikow: PostClass[] = []
  wynik: PostClass = null
  wynik2: PostClass[] = []
  wynik3: CommentClass[] = []
  wynik4: CommentClass[] = []

  constructor(private daneOsobyService: DaneOsobyService, private jsonService: JsonService) {}

  ngOnInit() {

    this.jsonService.getList('posts').subscribe(result => {
      this.listaWynikow = result
      console.log('ListaWynikow', result)
    })
    this.jsonService.getObject('posts', 1).subscribe(result => {
      this.wynik = result
      console.log('Wynik', this.wynik)
    })
    this.jsonService.getByUserId('posts', 1).subscribe(result => {
      this.wynik2 = result
      console.log('Wynik2', this.wynik2)
    })
    // HTTP - ZADANIE 2 - start
    this.jsonService.getObject2('posts', 1).subscribe(result => {
      this.wynik3 = result
      console.log('Wynik3', this.wynik3)
    },
    err => {
      console.log(err)
    })
    this.jsonService.getByPostId('comments', 1).subscribe(result => {
      this.wynik4 = result
      console.log('Wynik4', this.wynik4)
    },
    err => {
      console.log(err)
    })
    // HTTP - ZADANIE 2 - end
  }
}

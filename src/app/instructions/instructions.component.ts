import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movies.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html'
})
export class InstructionsComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  public movies: Movie[]
  public champions: Movie[]
  public movies_selected: Movie[] = [];
  public qty_selected: number = 0
  public qty_maximum: number = 8
  public result_cup: boolean = false

  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(
        movies => {
          this.movies = movies
          console.log(movies)
        },
      );
  }


  addMovies(event: any){
    let movie = this.movies.find(e => e.id == event.target.value)

    if(event.target.checked){
      this.movies_selected.push(movie)
    }
    else{
      let index = this.movies_selected.findIndex(e => e.id === event.target.value)
      console.log(index)
      this.movies_selected.splice(index, 1);
    }
    this.qty_selected = this.movies_selected.length
  }

  createCup(movies: Movie) {
    this.movieService.generatedCup(movies)
    .subscribe(
      movies => {
        this.result_cup = true
        this.champions = movies
      }
    );
  }

  reloadCup(){
    this.result_cup = false
    this.movies_selected = []
    this.champions = []
  }

}

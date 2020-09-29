import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movies.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html'
})
export class InstructionsComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  public movies: Movie[];
  public list_movies_selected: any = [];
  public qty_selected: number = 0; 

  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(
        movies => {
          this.movies = movies;
          console.log(movies);
        },
        error => console.log('error')
      );
  }


  AdicionarFilmes(event: any){
    let filme
    filme = this.movies.find(e => e.id == event.target.value)

    if(event.target.checked){
      console.log("to checado", event.target.value)
      this.list_movies_selected.push(filme)
    }
    else{
      let index = this.list_movies_selected.findIndex(e => e.id === event.target.value);
      console.log(index)
      this.list_movies_selected.splice(index, 1);
    }
    this.qty_selected = this.list_movies_selected.length
  }

  createCampeonato(movies: Movie) {
    this.movieService.gerarCampeonato(movies).subscribe(
        article => {
          console.log(article);
        }
    );
  }

}
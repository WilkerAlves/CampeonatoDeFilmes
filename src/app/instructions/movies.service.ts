import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';



@Injectable()
export class MovieService {

    constructor(private http: HttpClient){}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }

    // protected UrlGetMovies: string ="http://copafilmes.azurewebsites.net/api/filmes";
    protected UrlGetMovies: string ="https://localhost:44383";

    getMovies() : Observable<Movie[]> {
        return this.http.get<Movie[]>(this.UrlGetMovies + "/filmes")
    }

    gerarCampeonato(movies: any) : Observable<Movie> {
        console.log('movies', movies)
        return this.http.post<Movie>(this.UrlGetMovies + "/filmes", movies);
   } 

   
}
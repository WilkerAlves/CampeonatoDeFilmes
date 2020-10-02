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

    protected UrlGetMovies: string ="https://localhost:5001";

    getMovies() : Observable<Movie[]> {
        return this.http.get<Movie[]>(this.UrlGetMovies + "/movies")
    }

    generatedCup(movies: Movie) : Observable<Movie[]> {
        return this.http.post<Movie[]>(this.UrlGetMovies + "/movies", movies);
   }
}
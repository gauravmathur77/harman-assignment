import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor(private http: HttpClient) {}

  public getPosts() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map(resp => resp));
  }
  
  public getPostsbyId(id) {

    return this.http
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(map(resp => resp));
  }
}

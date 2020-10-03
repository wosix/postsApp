import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';
import {environment} from '../../environments/environment';

const API_POSTS_ENDPOINT = '/posts'

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private http: HttpClient) { }

  
  public getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(`${environment.API_BASE}${API_POSTS_ENDPOINT}`);
  }

}
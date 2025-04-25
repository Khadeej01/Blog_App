import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

=======
>>>>>>> 7ceb13984cbb0986a82266def421481d595b8763

@Injectable({
  providedIn: 'root'
})
export class PostService {

<<<<<<< HEAD
  private apiUrl = `http://localhost:3000/posts`;

  constructor(private http : HttpClient) { }

  getPosts(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  getPost(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post);

  }

  updatePost(id: number, post: any) : Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id : number): Observable <any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }


=======
  constructor() { }
>>>>>>> 7ceb13984cbb0986a82266def421481d595b8763
}

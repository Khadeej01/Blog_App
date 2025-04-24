import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatusSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  authStatus = this.authStatusSubject.asObservable();
  private apiUrl = 'http://localhost:3000'; // JSON Server base URL

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(credentials: { email: string; password: string }): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users?email=${credentials.email}&password=${credentials.password}`)
      .pipe(
        tap(users => {
          if (users.length > 0) {
            localStorage.setItem('token', 'fake-jwt-token');
            this.authStatusSubject.next(true);
          } else {
            throw new Error('Invalid credentials');
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authStatusSubject.next(false);
  }
}
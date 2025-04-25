import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface User {
  id: number;
  email: string;
  username: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login';
  private token: string | null = null;
  private user: User | null = null;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { email, password }).pipe(
      tap(response => {
        this.token = response.token;
        this.user = response.user;
        this.isAuthenticatedSubject.next(true);
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => new Error(error.error?.error || 'Login failed'));
      })
    );
  }

  logout(): void {
    this.token = null;
    this.user = null;
    this.isAuthenticatedSubject.next(false);
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  getToken(): string | null {
    return this.token;
  }

  getUser(): User | null {
    return this.user;
  }
}
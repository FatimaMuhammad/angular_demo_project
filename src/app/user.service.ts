// src/app/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/users'; // Fake Store API URL

  constructor(private http: HttpClient) { }

  // Method to get users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  } 

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}

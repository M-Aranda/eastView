import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EyeServiceService {

  apiUrl = 'http://localhost:5052/api/Citizen';

  constructor(private http: HttpClient) { }

  getCitizens(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetCitizens`);
  }

  registerCitizen(citizen: String): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}/RegisterCitizen/${citizen}`, citizen);
  }

  updateCitizen(citizen: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/UpdateCitizen`, citizen);
  }

  deleteCitizen(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/DeleteCitizen/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EyeServiceService {

  citizenApiUrl = 'http://localhost:5052/api/Citizen';
  taskApiUrl ='http://localhost:5052/api/Task';

  constructor(private http: HttpClient) { }

  getCitizens(): Observable<any[]> {
    return this.http.get<any[]>(`${this.citizenApiUrl}/GetCitizens`);
  }

  registerCitizen(citizen: String): Observable<any> {

    return this.http.post<any>(`${this.citizenApiUrl}/RegisterCitizen/${citizen}`, citizen);
  }

  updateCitizen(citizen: any): Observable<any> {
    return this.http.put<any>(`${this.citizenApiUrl}/UpdateCitizen`, citizen);
  }

  deleteCitizen(id: number): Observable<any> {
    return this.http.delete<any>(`${this.citizenApiUrl}/DeleteCitizen/${id}`);
  }



  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.taskApiUrl}/GetTasks`);
  }

  registerTask(task: String): Observable<any> {

    return this.http.post<any>(`${this.taskApiUrl}/RegisterTask/${task}`, task);
  }

  updateTask(task: any): Observable<any> {
    return this.http.put<any>(`${this.taskApiUrl}/UpdateTask`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.taskApiUrl}/DeleteTask/${id}`);
  }



}

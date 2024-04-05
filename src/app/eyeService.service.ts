import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EyeServiceService {

  citizenApiUrl = 'http://localhost:5052/api/Citizen';
  taskApiUrl ='http://localhost:5052/api/Task';
  assignatedTasksApiUrl ='http://localhost:5052/api/AsignacionTarea';

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

  getTasksByWeekDay(weekDay: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.taskApiUrl}/GetTasksByWeekDay/${weekDay}`);
  }

  registerTask(task: any): Observable<any> {

    return this.http.post<any>(`${this.taskApiUrl}/RegisterTask`, task);
  }

  updateTask(task: any): Observable<any> {
    return this.http.put<any>(`${this.taskApiUrl}/UpdateTask`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.taskApiUrl}/DeleteTask/${id}`);
  }

  getAssignatedTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.assignatedTasksApiUrl}/GetAssignatedTasks`);
  }

  assignTask(assignment: any): Observable<any> {

    return this.http.post<any>(`${this.assignatedTasksApiUrl}/AssignTask`, assignment);
  }



}

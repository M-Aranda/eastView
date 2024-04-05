import { Component } from '@angular/core';
import { EyeServiceService } from '../eyeService.service';

@Component({
  selector: 'app-witch-view',
  templateUrl: './witch-view.component.html',
  styleUrl: './witch-view.component.css'
})
export class WitchViewComponent {


  tasks: any[] = [];
  citizens: any[] = [];
  assignatedTasks: any [] = [];
  selectedWeekDay!: number;
  selectedCitizen!: number;


  displayedColumnsForTasks: string[] = ['Id', 'Descripción tarea', 'Dia de la semana'];
  displayedColumnsForTaskAssignation: string[] = ['Id', 'Tarea', 'Dia de la semana', 'Ciudadano asignado'];



  constructor(private eyeService: EyeServiceService
  ) {}


  ngOnInit() {

    this.eyeService.getTasksByWeekDay(1).subscribe((data: any[]) => {
      this.tasks = data;
    });

    this.eyeService.getCitizens().subscribe((data: any[]) => {
      this.citizens = data;
    });

    this.eyeService.getAssignatedTasks().subscribe((data: any[]) => {
      this.assignatedTasks = data;
    });






}

filterTasksByWeekDay(args: number){

  this.eyeService.getTasksByWeekDay(args).subscribe((data: any[]) => {
    this.tasks = data;
  });

}

assignTask(){

  var tarea = (<HTMLInputElement>document.getElementById("selectorDeTareas")).value;
  var ciudadano = (<HTMLInputElement>document.getElementById("selectorDeCiudadanos")).value;

  var assignment ={
    "idCiudadano": ciudadano,
    "idTarea": tarea
  }


  this.eyeService.assignTask(assignment).subscribe();


}


}

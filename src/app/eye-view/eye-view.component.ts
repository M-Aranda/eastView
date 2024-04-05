import { Component } from '@angular/core';
import { EyeServiceService } from '../eyeService.service';



@Component({
  selector: 'app-eye-view',
  templateUrl: './eye-view.component.html',
  styleUrl: './eye-view.component.css'
})
export class EyeViewComponent {

  citizens: any[] = [];
  tasks: any[] = [];

  displayedColumnsForCitizens: string[] = ['Id', 'Nombre ciudadano', 'Acción'];
  displayedColumnsForTasks: string[] = ['Id', 'Descripción tarea', 'Dia de la semana','Acción'];


  constructor(private eyeService: EyeServiceService
  ) {}


  ngOnInit() {
    this.eyeService.getCitizens().subscribe((data: any[]) => {
      this.citizens = data;
    });

    this.eyeService.getTasks().subscribe((data: any[]) => {
      this.tasks = data;
    });


}

addCitizen(){
  var inputValue = (<HTMLInputElement>document.getElementById("citizenName")).value;

  this.eyeService.registerCitizen(inputValue).subscribe();

}

editCitizen(args: any){

  var citizen = {
    "id": args.id,
    "nombre": args.nombre
  }

  this.eyeService.updateCitizen(citizen).subscribe();

}



deleteCitizen(args: any){
  this.eyeService.deleteCitizen(args).subscribe();

}



addTask(){
  var inputValue = (<HTMLInputElement>document.getElementById("citizenName")).value;

  this.eyeService.registerCitizen(inputValue).subscribe();

}

editTask(args: any){

  var citizen = {
    "id": args.id,
    "nombre": args.nombre
  }

  this.eyeService.updateCitizen(citizen).subscribe();

}



deleteTask(args: any){
  this.eyeService.deleteCitizen(args).subscribe();


}



}



import { ChangeDetectorRef, Component } from '@angular/core';
import { EyeServiceService } from '../eyeService.service';
import {MatTableModule} from '@angular/material/table';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-eye-view',
  templateUrl: './eye-view.component.html',
  styleUrl: './eye-view.component.css'
})
export class EyeViewComponent {

  citizens: any[] = [];

  displayedColumns: string[] = ['Id', 'Nombre ciudadano', 'Acción'];


  constructor(private eyeService: EyeServiceService
  ) {}


  ngOnInit() {
    this.eyeService.getCitizens().subscribe((data: any[]) => {
      this.citizens = data;
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

  this.eyeService.getCitizens().subscribe();
}


}



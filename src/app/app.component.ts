import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'eastView';
  eyeViewIsShown!: Boolean;
  witchViewIsShown!: Boolean;


  public displayEyeView(){
    if(!this.eyeViewIsShown){
      this.eyeViewIsShown = true;
    }else{
      this.eyeViewIsShown = false;
    }
  }

  public displayWitchView(){

    if(!this.witchViewIsShown){
      this.witchViewIsShown = true;
    }else{
      this.witchViewIsShown = false;
    }
  }






}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EyeViewComponent } from './eye-view/eye-view.component';
import { WitchViewComponent } from './witch-view/witch-view.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTable, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EyeViewComponent,
    WitchViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    HttpClientModule,
    MatTable,
    MatTableModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

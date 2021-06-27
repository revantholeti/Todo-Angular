import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule} from '@angular/material';
import { TodoDetailsDialogComponent } from './components/todo-details-dialog/todo-details-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TodoDetailsDialogComponent]
})
export class AppModule { }

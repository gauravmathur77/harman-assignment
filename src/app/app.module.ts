import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppService } from './app.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  declarations: [AppComponent, HelloComponent],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}

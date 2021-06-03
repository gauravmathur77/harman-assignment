import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppService } from './app.service';
import {  MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'hello',
  template: `
  <mat-form-field appearance="fill">
      <mat-label>Values</mat-label>
      <mat-select (selectionChange)="filterData($event.value)">
        <mat-option *ngFor="let data of dropdownData" [value]="data">{{data}}</mat-option>
      </mat-select>
    </mat-form-field>


    <button (click)="reset()">Reset</button>
    <table >
      <tr>
        <td>ID</td>
        <td>Title</td>
        <td>Body</td>
      </tr>
      <tr *ngFor="let data of dataSource">
        <td>{{data.id}}</td>
        <td>{{data.title}}</td>
        <td>{{data.body}}</td>
      </tr>
    </table>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  public dropdownData: any = [];
  public dataSource: any = [];



  constructor(private appService: AppService) {}

  ngOnInit() {
    this.reset()
  }
  
  
  filterData(id) {
    this.dataSource = [];
    this.appService.getPostsbyId(id).subscribe((resp: any) => {
      this.dataSource.push(resp);
    });
  }

  reset() {
    this.appService.getPosts().subscribe((resp: any) => {
      this.dataSource  = resp;
      resp.forEach(element => {
        this.dropdownData.push(element.id)
      });
    });
  }
}

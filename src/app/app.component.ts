import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'primeraclase';
  students=0;

  constructor(){
    this.students=0;
  }

  ngOnInit(): void {
  }
}

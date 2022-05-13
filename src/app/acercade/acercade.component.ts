import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  programa:string = "";
  autor:string = "";
  fecha:string = "";
  constructor() { }

  ngOnInit(): void {
    this.programa = "ANGULAR";
    this.autor = "Antonio Garcia";
    this.fecha = "13/05/2022"
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mapDemo';
  showChart:boolean= false
  showLine:boolean = false;
  showMap:boolean = true
  ngOnInit(){

  }

  onToggle(){
    this.showChart = true
    this.showLine = false
    this.showMap = false
  }
  onToggleLine(){
    this.showChart = false
    this.showLine = true;
    this.showMap = false
  }

  onToggleMap(){
    this.showMap = true
    this.showLine = false
    this.showChart = false

  }
}

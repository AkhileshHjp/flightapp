import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookafilgth',
  templateUrl: './bookafilgth.component.html',
  styleUrls: ['./bookafilgth.component.css']
})
export class BookafilgthComponent implements OnInit {
  bookdata : any
  constructor(
    private router : Router

  ) { }

  ngOnInit(): void {
  }
onback(){
  this.router.navigate(['bookpage'])
}
  

}

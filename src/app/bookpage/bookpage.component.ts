import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {
  citylist:any
  myControl = new FormControl('');
  options: string[] = ['Patna', 'Dehli', 'Bangalore','Mumbai','Ahmedabad'];
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onBook(){
    this.router.navigate(['bookflight'])
  }
}

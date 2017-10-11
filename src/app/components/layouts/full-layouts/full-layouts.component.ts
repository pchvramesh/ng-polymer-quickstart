import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-full-layouts',
  templateUrl: './full-layouts.component.html',
  styleUrls: ['./full-layouts.component.scss']
})
export class FullLayoutsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  logOut(){
    this.router.navigate(['/login']);
  }
}

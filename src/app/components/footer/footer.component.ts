import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test : Date = new Date();

  
  userLastName: string;

  @Input()
  title: string;
  
  constructor() {
    
    this.userLastName = 'Vargas';
   }

  ngOnInit() {
  }

}

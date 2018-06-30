import { Component, OnInit } from '@angular/core';

//Services
import { ParsingDataService } from '../parsing-data.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notification:any;

  constructor(private parsData: ParsingDataService) { 
    // this.notification = '';
  }

  ngOnInit() {
    //To view the number of selected product
    this.parsData.cast.subscribe(product => this.notification = product)
    console.log(this.notification);
  }

}

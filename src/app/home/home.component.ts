import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Service
import { GetDataService } from '../get-data.service';
import { ParsingDataService } from '../parsing-data.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  checkData:Array<any>;
  selectedProduct:Array<any>;
  mode:boolean;
  constructor(
    private data: GetDataService,
    private parsData: ParsingDataService
  ) {
    this.selectedProduct = [];
    this.mode = false;
  }
  
  ngOnInit() {
    this.getData();   

    //listen to data from the service
    this.parsData.cast.subscribe(product => this.selectedProduct = product)
  }

  //Get Product Data
  getData(): void {
    const myPath = '../assets/data/products.json';
    this.data.getDataFunc(myPath).subscribe(
      res => {
        this.checkData = res;
        console.log(this.checkData);
      },
      err => {
        console.log(err);
      }
    );
  }

    //check selected products
    btnclick(id){
        for (const prop of this.checkData){
          if(prop.id === id){
            this.selectedProduct.push(prop);
          }
        }
      }
  
}

import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

//Service
import { GetDataService } from '../get-data.service';
import { ParsingDataService } from '../parsing-data.service'

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  flag:boolean;
  checkData:Array<any>;  
  singleProductName:any;
  singleProductDetail:Array<object>;
  cartProductAll:Array<any>;

  constructor(
    private currentRoute:ActivatedRoute,
    private data: GetDataService,
    private parsData:ParsingDataService
  ) {
  this.flag = false;
  this.singleProductDetail = [];
  this.cartProductAll = [];

  this.currentRoute.params.subscribe(params => {
    this.singleProductName = params;
  })

  //Calling Functions
  this.getData();

}

ngOnInit() {
  //Get Selected Data From The Service
  this.parsData.cast.subscribe(product => this.cartProductAll = product)
  console.log("get " + this.cartProductAll)
}
  //Get Product Data
  getData(): void {
    const myPath = '../assets/data/products.json';
    this.data.getDataFunc(myPath).subscribe(
      res => {
        this.checkData = res;
        console.log(this.checkData);
        this.checkProduct();
      },
      err => {
        console.log(err);
      }
    );
  }
  checkProduct(){
    for (const prop of this.checkData){
      if(prop.name === this.singleProductName.name){
        this.singleProductDetail.push(prop);
        }
    }

  }
  // Add To Cart 
  addCart():void{
    this.cartProductAll.push(this.singleProductDetail[0]);
  }


}

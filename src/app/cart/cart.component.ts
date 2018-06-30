import { Component, OnInit } from '@angular/core';

//Services
import { ParsingDataService } from '../parsing-data.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts:Array<any>;
  checkCart:boolean;

  constructor(
    private parsData: ParsingDataService
  ) { 
  }
  
  ngOnInit() {
    
    //Get Selected Data From The Service
    this.parsData.cast.subscribe(product => this.cartProducts = product)
    this.checkEmptyCart();
  }

  //Delete Record From The Cart
  deleteRecord(id){
    for (const prop of this.cartProducts){
      if(prop.id === id){
        let productIndex = this.cartProducts.indexOf(prop);
        this.cartProducts.splice(productIndex,1);
        break;
      }
    }

  }
  checkEmptyCart():void{
    if(this.cartProducts.length == 0){
      this.checkCart = false;
    }else{
      this.checkCart = true;
    }
  }


}

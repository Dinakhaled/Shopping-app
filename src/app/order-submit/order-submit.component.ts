import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

//Modal Toggle
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-submit',
  templateUrl: './order-submit.component.html',
  styleUrls: ['./order-submit.component.scss']
})
export class OrderSubmitComponent implements OnInit {
  closeResult: string;
  user_name:any;
  user_email:any;
  user_phone:any;
  constructor(
    private goHome: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  goHomeRedirct(): void {
    this.goHome.navigate(['//']);
  }

  userFunc(userData: NgForm):void{
    if (userData.valid) {
      this.goHomeRedirct();
    } 
  }

  // Trigger The Modal
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}

/* ============Modules============ */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

/* ============Components============ */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { OrderSubmitComponent } from './order-submit/order-submit.component';
import { CartComponent } from './cart/cart.component';

/* ============Servcies============ */
import { GetDataService } from './get-data.service';
import { ParsingDataService } from './parsing-data.service';

/* ============pipes============ */
import { FilterPipe } from './filter.pipe';

/* ============My Pages Links============ */
const pages:Routes = [
  {path:"", component:HomeComponent},
  {path:"Product/:name", component:SingleProductComponent},
  {path:"Submit", component:OrderSubmitComponent},
  {path:"Cart", component:CartComponent}  
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SingleProductComponent,
    FilterPipe,
    OrderSubmitComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(pages),
    FormsModule
  ],
  providers: [GetDataService, ParsingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

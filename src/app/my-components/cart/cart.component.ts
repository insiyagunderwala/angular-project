import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public totalBill : number = 1;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((e:any) => {
      this.products = e;
      this.totalBill = this.cartService.getTotal();
      //console.log("bill", this.totalBill);
    });
  }

  deleteItem(index:any){
    // let index : number = 4; 
    // console.log("deleted item", item);
    this.cartService.deleteProduct(index);
  }

  emptyCart(){
    this.cartService.emptyCart();
  }

}
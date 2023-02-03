import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public grandTotal: number = 0;
  public cartList:any[] = [];
  public productList:any = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProducts(product : any){
    this.cartList.push(...product);
    this.productList.next(product);
  }

  addToCart(product : any){
    /*let flag:boolean = false;
    this.productList.forEach((item:any,i:any) =>{
      if(item.id === product.id){
        flag = true;
        this.productList[i].ProductQuantity += qty;
        this.grandTotal += product.ProductPrice * qty;
        
      }
    });

    if(flag == false){
      this.productList.push({...product, ProductQuantity: qty});
      this.grandTotal += product.ProductPrice * qty;
      alert("Product added to cart");
    }*/

    this.cartList.push(product);
    this.productList.next(this.cartList);
    this.getTotal();
    //console.log(this.cartList);
  }

  getTotal() : number{
    let Total : number = 0;
    this.cartList.map((a) => {
      Total += a.ProductPrice;
    })
    console.log(Total);
     
    return Total;
  }

  deleteProduct(index:any){
    console.log('index###', index);
    
    // let index : number = -2;
    /*this.products.forEach((product, i) => {
      if(product.id == item.id){
        
      }
    });*/
    // this.cartList.forEach((a, i) => {
    //   if(a.id === product.id){
    //     index = i;
        
    //   }
    // });
    // this.cartList.splice(index);
    this.cartList.splice(index,1);
    this.productList.next(this.cartList);
    alert("Item Deleted!")
  }

  emptyCart(){
    this.cartList = [];
    this.productList.next(this.cartList);
  }
}

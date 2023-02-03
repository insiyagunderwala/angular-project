import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products: any; 
  searchKey: string = '';
  /*ProductName : string=""; 
  ProductPrice : number=0;
  ProductImage : string="";
  ProductDescription : string="";*/
  
  constructor(private productService: ApiService, private cartService: CartService){}

  ngOnInit(){
    
    this.productService.getProducts().subscribe(data => { 
        //console.log("insiya",data)
        this.products = data.map((e:any) => { 
            return{ 
                ProductId:e.id, 
                ProductName:e.title,
                ProductPrice:e.price, 
                ProductDescription:e.description,
                ProductImage:e.img, 
                ProductCategory:e.category
              };
          }) 
          this.products.forEach((e:any) => {
            Object.assign(e, {quantity:1, total:e.ProductPrice});
            //console.log("here", e.total);
            
          });
          //console.log(this.products);
        });

        this.cartService.search.subscribe((val:any) => {
          this.searchKey = val;
        })
}

addedToCart(product: any){
  this.cartService.addToCart(product);
  //console.log(product);
}
}

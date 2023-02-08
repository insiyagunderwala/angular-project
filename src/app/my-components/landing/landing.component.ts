import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
// import { CartComponent } from '../cart/cart.component';
import { doc, setDoc } from "firebase/firestore";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  
    projectId: 'myntra-c3e27',
    appId: '1:873372781784:web:23bf433a0ae950b6a69bad',
    storageBucket: 'myntra-c3e27.appspot.com',
    apiKey: 'AIzaSyDNkoSGt9Ddc414ejJIAPBfdkd4-my1MXY',
    authDomain: 'myntra-c3e27.firebaseapp.com',
    messagingSenderId: '873372781784',
  
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public myOrders : any = [];
  public productName: any =[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((e:any) => {
      this.myOrders = e;     
    });
    // console.log("orders", this.myOrders);
    this.myOrders.forEach(async (e:any, i:number) => {
      this.productName.push(e.ProductName);
      await setDoc(doc( db, "my orders", "1"), {
        userID: e.UserID,
        products: this.productName
      });
    });
  }
}
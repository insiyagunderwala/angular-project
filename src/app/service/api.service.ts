import { Injectable } from '@angular/core';
import { Product } from '../my-components/models/Product';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class ApiService {  

  constructor(private  db: AngularFirestore){
  }

  getProducts(){
    let data = this.db.collection('Products').valueChanges();
    return data;
  }


}

  
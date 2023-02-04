import { Component } from '@angular/core';
import { DiscountOffers, Icategory, Iproduct } from '../Shared Classes and types/Shared_Classes_and_types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
    discount:DiscountOffers;
    storeName:String;
    storeLogo:String;
    productList:Iproduct[];
    categoryList:Icategory[];
    clientName:string;
    isPurshased:Boolean;
  constructor(){
    this.discount=DiscountOffers.fifteen_ten_percentage ;
    this.storeName="Ali Store";
    this.storeLogo="../../assets/Logo.png";
    this.productList=[
      {
        id : 1,
        name:"Bedding Room",
        quantity: 2,
        price: 200,
        img:"../../assets/bed.avif",
      },
      {
        id : 2,
        name:"Dinning Room",
        quantity: 1,
        price: 100,
        img:"../../assets/bed.avif",
      },{
        id : 3,
        name:"L-shape",
        quantity: 3,
        price: 300,
        img:"../../assets/bed.avif",
      },{
        id : 4,
        name:"Waredrobe",
        quantity: 2,
        price: 200,
        img:"../../assets/bed.avif",
      },
    ];
    this.categoryList=[
      {
        id:1,
        name:"Bedding Rooms"
      },
      {
        id:2,
        name:"Dinning Rooms"
      },
      {
        id:1,
        name:"Kitchens"
      },
      {
        id:1,
        name:"L-Shapes"
      },
    ];
    this.clientName="Ali Khaled";
    this.isPurshased=true;
  }

  change(client_name:string){
    this.clientName=client_name
  }
    
}

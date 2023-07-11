import { Injectable } from '@angular/core';
import {of} from 'rxjs'
import { products } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cart:products[]=[]
  private productslist:products[]=[
    {
    productId:1001,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/9a16cfc0105b4b2c2727bf7c0edec2b5/a/1/a1_32.jpg",
    productName:"Thrax Aello X 3 Cricket Batting Gloves Standard Size Right Hand",
    productoriginal:"gloves",
    productPrice:"INR 695.00",
    Edit:false
  },
  {
    productId:1002,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/9a16cfc0105b4b2c2727bf7c0edec2b5/a/1/a1_28_1.jpg",
    productName:"Thrax Aello X 1 Cricket Batting Gloves Standard Size Right Hand",
    productPrice:"INR 899.00",
    productoriginal:"gloves",
    Edit:false

  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/9a16cfc0105b4b2c2727bf7c0edec2b5/a/1/a1_70_2.jpg",
    productName:"SG Test Cricket Batting Gloves White Black And Red",
    productPrice:"INR 1299.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/9a16cfc0105b4b2c2727bf7c0edec2b5/a/1/a1_45_1.jpg",
    productName:"Thrax Court Power 008 Badminton Shoes Yellow and Black",
    productPrice:"INR 995.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/9a16cfc0105b4b2c2727bf7c0edec2b5/a/1/a1_23.jpg",
    productName:"NIVIA HY Court 2 Badminton Shoes White And Blue",
    productPrice:"INR 1299.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/8c6e01420b564cb808c850c1bbd0d7a6/a/1/a1_copy_1.jpg",
    productName:"Asics Gel Peake Mens Cricket Shoes White Directoire Blue",
    productPrice:"INR 4780.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/9a16cfc0105b4b2c2727bf7c0edec2b5/t/h/th_wkg_140_sim._large.jpg",
    productName:"Thrax W4 Aello Cricket Wicket Keeping Gloves Sky Blue White",
    productPrice:"INR 1299.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/8c6e01420b564cb808c850c1bbd0d7a6/a/1/a1_71.jpg",
    productName:"Kookaburra Kahuna Players Cricket Wicket Keeping Gloves",
    productPrice:"INR 5290.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/9a16cfc0105b4b2c2727bf7c0edec2b5/1/_/1_24.jpg",
    productName:"SG Hilite Wicket Keeping Gloves",
    productPrice:"INR 3799.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/8c6e01420b564cb808c850c1bbd0d7a6/c/c/cc_bk_00015_large.jpg",
    productName:"COSCO Funtime Basketball Size 7",
    productPrice:"INR 288.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/8c6e01420b564cb808c850c1bbd0d7a6/n/i/ni_bk_00040_large.jpg",
    productName:"NIVIA Tucana Size 6 Basketball    ",
    productPrice:"INR 1249.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/8c6e01420b564cb808c850c1bbd0d7a6/c/c/cc_bk_00025_large.jpg",
    productName:"COSCO Super Basketball Size 6",
    productPrice:"INR 630.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/712b931dac1b924a11d1b7282ad89910/m/r/mrf_cb_000003_r_large.jpg",
    productName:"MRF Genius Grand Edition Virat Kohli English Willow Cricket Bat Standard Sizeng",
    productPrice:"INR 28,899.00",
    productoriginal:"gloves",
    Edit:false
  },
  
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/712b931dac1b924a11d1b7282ad89910/n/b/nb_cb_4562_olmn_large.jpg",
    productName:"New Balance DC 1280 Players Edition English Willow Cricket Bat",
    productPrice:"INR 69839.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/712b931dac1b924a11d1b7282ad89910/s/g/sg_cbt_01_large.jpg",
    productName:"SG Sunny 70 Years Limited Edition English Willow Cricket Bat",
    productPrice:"INR 113999.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/9a16cfc0105b4b2c2727bf7c0edec2b5/s/g/sg_cb_000083_large.jpg",
    productName:"SG Enduralite Light Tennis Ball 06 Ball Set Cricket Ball",
    productPrice:"INR 870.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/9a16cfc0105b4b2c2727bf7c0edec2b5/t/h/th_cb_11111_sss_large.jpg",
    productName:"Thrax Bouncer Red Cricket Balls 3 Ball Set",
    productPrice:"INR 770.00",
    productoriginal:"gloves",
    Edit:false
  },
  {
    productId:1003,
    productImage:"https://www.khelmart.com/pub/media/catalog/product/cache/9a16cfc0105b4b2c2727bf7c0edec2b5/t/h/th_cb_52_225_large.jpg",
    productName:"Thrax Bouncer Red Cricket Balls 3 Ball Set",
    productPrice:"INR 810.00",
    productoriginal:"gloves",
    Edit:false
  }

  

  ]

  addtocart(p1:any){
    this.cart.push(p1)
  }
  viewcart(){
    return of (this.cart)
  }
  deletecart(product:any){
    this.cart.forEach((akhil,ind)=>{
      if(akhil.productId==product.productId)
      {
        this.cart.splice(ind,1)
      }
    })
  }
  viewproducts(){
    return of (this.productslist)
  }
  
  addproduct(p1:any){
    this.productslist.push(p1)
  }
 
  updateproduct(product:any){
    this.productslist.forEach((akhil,ind)=>{
      if(akhil.productId==product.productId){
        this.productslist.splice(ind,1,product)
      }
    })
  }
  delete(product:any){
    this.productslist.forEach((akhil,ind)=>{
      if(akhil.productId==product.productId){
        this.productslist.splice(ind,1)
      }
    })
  }
  constructor() { }
}

import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { products } from '../service/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

products:any;
constructor(private service:ProductService,private route:Router){}
ngOnInit(){
  this.service.viewproducts().subscribe((res)=>{
    this.products=res;
    
  })

}
editcontent(product:any){
  product.Edit=true;
}   
  delete(product:any)
  {
    this.service.delete(product);
  
}
update(product:any){
  product.Edit=false;
  this.service.updateproduct(product);
}
cart(product:any){
  this.service.addtocart(product);
  this.route.navigateByUrl("/user/cart")
  
}


   //
}

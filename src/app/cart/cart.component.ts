import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
products:any;
constructor(private service:ProductService,private route:Router){}
delete(product:any){
  this.service.deletecart(product);
  
}
check(){
  this.route.navigateByUrl("/checkout")
}
shopping(){
  this.route.navigateByUrl("/user/products")
}
ngOnInit(){
  this.service.viewcart().subscribe((res)=>{
    this.products=res;
  })
}


}

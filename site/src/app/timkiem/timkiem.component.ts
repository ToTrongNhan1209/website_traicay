import { Component } from '@angular/core';
import { ListcardComponent } from '../listcard/listcard.component';
import { ProductInterface } from '../product-interface';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-timkiem',
  imports: [ListcardComponent],
  templateUrl: './timkiem.component.html',
  styleUrl: './timkiem.component.css'
})
export class TimkiemComponent {
  searchPro: ProductInterface[] = [];
  constructor( 
    private productServices: ProductService,
    private route: ActivatedRoute
  ){}
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.productServices.searchProducts(params['name']).subscribe(data => {
      this.searchPro = data;
      console.log('search',this.searchPro);
  });
});
}
}
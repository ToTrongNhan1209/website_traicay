import { Component, Input } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-listcard',
  imports: [CommonModule,RouterModule],
  templateUrl: './listcard.component.html',
  styleUrl: './listcard.component.css'
})
export class ListcardComponent {
  // lấy dữ liệu từ component cha sang con thông qua input
    @Input() title = '';
    @Input() data: ProductInterface[] = []
    constructor() {}

    
}

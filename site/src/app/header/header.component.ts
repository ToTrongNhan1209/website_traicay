import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-header', // ten de goi ben html
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  keyword:string = '';
  constructor(private router: Router, public cartService: CartService) { }

  onSearch() {
    if(!this.keyword.trim()){
      return;
    }
    this.router.navigate(['/timkiem'], {queryParams: {name: this.keyword}});
}
}

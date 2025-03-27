import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-lienhe',
  imports: [CommonModule,FormsModule],
  templateUrl: './lienhe.component.html',
  styleUrl: './lienhe.component.css'
})
export class LienheComponent {
  userName= 'TOTRONGNHAN';
  imageIRL = "../assets/image/anhcauchuyen.jpg"

  handleClick() {
    alert("Bạn đã Click vào button");
}
userInput= '';
AnHien = true;

Totalmessage(){
  this.AnHien = !this.AnHien
}



changeImage() {
  this.imageIRL = this.imageIRL === "../assets/image/anhcauchuyen.jpg"
    ? "../assets/image/slide_3_img.jpg"
    : "../assets/image/anhcauchuyen.jpg";
}
gioitinh = 'nữ';
changeGT (){
  this.gioitinh = this.gioitinh === 'nữ' ? 'nam' : 'nữ';
}

isRed = true;
changeColor() { 
  this.isRed = !this.isRed;
}
}
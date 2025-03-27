import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { TimkiemComponent } from './timkiem/timkiem.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { GiohangComponent } from './giohang/giohang.component';

export const routes: Routes = [
    { path:'',component: HomeComponent},
    { path:'home',component: HomeComponent},
    { path:'sanpham',component: SanphamComponent},
    { path:'gioithieu',component: GioithieuComponent},
    { path:'lienhe',component: LienheComponent},
    { path:'timkiem',component: TimkiemComponent},
    { path:'chitiet/:id', component: ChitietsanphamComponent},
    { path: 'giohang', component: GiohangComponent}
];

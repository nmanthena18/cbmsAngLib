import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderService } from './header.service'
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [HeaderComponent],
  exports:[HeaderComponent],
  providers:[HeaderService]
})
export class CbmsHeaderModule { }

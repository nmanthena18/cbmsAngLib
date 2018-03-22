import { Component, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';
import { HeaderService } from './header.service';
import { MenuTyping } from './typing/menu.typings';

@Component({
  selector: 'cbms-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, DoCheck {
  MenuData:MenuTyping[]=[];
  constructor(
    private headerService:HeaderService
  ) { 
    
  }

  ngOnInit() {
    let data:any;
    this.MenuData = this.headerService.getMenuData();
  }
  ngDoCheck(){
    
  }

}

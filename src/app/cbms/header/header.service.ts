
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuTyping } from './typing/menu.typings';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HeaderService {
  private MenuData: MenuTyping[] = [];
  private headers :Headers = new Headers();
  private options:RequestOptions;
  constructor(private http:Http) {
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
    this.MenuData = [{"name":"CBMS","href":"cbms/dealticket/workQueuesHomeAction.do", "target":""},
    {"name":"Client Info","href":"cbms/cis/searchClientInfoAction.do", "target":""},
    {"name":"Invoices","href":"cbms/reports/reportsRedirectAction.do?url=http://cbmsnet-stg1.ems.schneider-electric.com/ip2/default.aspx", "target":""},
    {"name":"Sustainability","href":"/cbms/reports/reportsRedirectAction.do?url=http://cbmsnet-stg1.ems.schneider-electric.com/Sustainability/Default.aspx", "target":""},
    {"name":"UBM","href":"cbms/ubmbatchjob/ubmBatchJobHomeAction.do", "target":""},
    {"name":"Rate Library","href":"cbms/ubmbatchjob/ubmBatchJobHomeAction.do", "target":""},
    {"name":"Contract","href":"cbms/contract/contractHomeAction.do", "target":""},
    {"name":"Risk Mgmt","href":"/cbms/dealticket/riskManagementHomeAction.do", "target":""},
    {"name":"Tools","href":"cbms/savings/toolsAction.do", "target":""},
    {"name":"Resources","href":"cbms/reports/reportsRedirectAction.do?url=http://cbmsnet-stg1.ems.schneider-electric.com/overview/dvpagelist.aspx", "target":""},
    {"name":"Reports","href":"cbms/reports/reportsRedirectAction.do?url=http://cbmsnet-stg1.ems.schneider-electric.com/report/default.aspx", "target":""},
    {"name":"System","href":"cbms/reports/reportsRedirectAction.do?url=http://cbmsnet-stg1.ems.schneider-electric.com/system/default.aspx", "target":""},
    {"name":"Help","href":"cbms/reports/reportsRedirectAction.do?url=https://servicedeskstg1.ems.schneider-electric.com/servicedesk/customer/portal/77/group/159", "target":"_blank"},
    {"name":"Logout","href":"cbms/logout.do", "target":""}];
  }

   getMenuData(){     
    return this.MenuData
   }

   put(item:MenuTyping){
     this.MenuData.push(item);
     return this.MenuData;
   }

   get(api:string){
     return this.http.get(api, this.options).map((res:Response) => res.json()) 
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }   

   getNewMenu(api:string){
    this.MenuData.length = 0;
    this.http.get(api, this.options).map((res:Response) => res.json()).subscribe(d =>{
      d.forEach(element => {
        this.MenuData.push(element);
      });
      
    });
   }
}

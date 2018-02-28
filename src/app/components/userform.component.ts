import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserOrderService } from './user.service';
import {IMyDpOptions} from  '../../../node_modules/angular4-datepicker/src/my-date-picker';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserFormComponent {

@ViewChild('f') orderForm: NgForm;

userOrder = {
  username:'',
  email:'',
  phonenumber:'',
  airport:'',
  date:''
}
submitted = false;

private mytime: Date = new Date();

currentYear: any = this.mytime.getUTCFullYear();
currentDate: any = this.mytime.getUTCDate();
currentMonth: any = this.mytime.getUTCMonth() + 1; //months from 1-12
//
public myDatePickerOptions: IMyDpOptions = {
  todayBtnTxt: '今天',
  dateFormat: 'yyyy-mm-dd',
  firstDayOfWeek: 'mo',
  sunHighlight: true,
  inline: false,
  disableUntil: {year: this.currentYear, month: this.currentMonth, day: this.currentDate},
  dayLabels: {su: "日", mo: "一", tu: "二", we: "三", th: "四", fr: "五", sa: "六"},
  monthLabels: { 1: "1月", 2: "2月", 3: "3月", 4: "4月", 5: "5月", 6: "6月", 7: "7月", 8: "8月", 9: "9月", 10: "10月", 11: "11月", 12: "12月" },
};

constructor(private userOrderService:UserOrderService){}
  onSubmit() {
    this.submitted = true;
    this.userOrder.username = this.orderForm.value.username;
    this.userOrder.email = this.orderForm.value.email;
    this.userOrder.phonenumber = this.orderForm.value.phonenumber;
    this.userOrder.airport = this.orderForm.value.airport;
    this.userOrder.date = this.orderForm.value.date.formatted;
    this.userOrderService.submitOrder(this.userOrder)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  onGet(){
    this.userOrderService.getOrder()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}

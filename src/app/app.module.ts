import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from '../../node_modules/angular4-datepicker/src/my-date-picker';

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/userform.component';
import { UserOrderService } from './components/user.service';

@NgModule({
  declarations: [
    AppComponent,UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule
  ],
  providers: [UserOrderService],
  bootstrap: [AppComponent]
})
export class AppModule {}

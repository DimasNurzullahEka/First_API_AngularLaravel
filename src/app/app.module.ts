import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ROUTES, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes : Routes = [
  {path: '', component:EmployeeComponent},
  {path: 'edit/:id', component:EmployeeEditComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

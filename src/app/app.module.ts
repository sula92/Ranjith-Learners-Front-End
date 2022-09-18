import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BranchComponent } from './model-components/branch/branch.component';
import { EmployeeComponent } from './model-components/employee/employee.component';
import { StudentComponent } from './model-componets/student/student.component';
import { ExamComponent } from './model-components/exam/exam.component';
import { TrialComponent } from './model-components/trial/trial.component';
import { TestComponent } from './test/test.component';
import { VehicleComponent } from './model-components/vehicle/vehicle.component';
import { ReportsComponent } from './model-components/reports/reports.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    BranchComponent,
    EmployeeComponent,
    StudentComponent,
    ExamComponent,
    TrialComponent,
    TestComponent,
    VehicleComponent,
    ReportsComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

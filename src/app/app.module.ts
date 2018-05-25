import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { AppComponent } from './app.component';
import { routing } from './app.routing.model';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { MaterialComponent } from './material/material.component';
import { FileUploadModule } from 'primeng/fileupload';
import { SpinnerModule } from 'primeng/spinner';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { PickerComponent } from './picker/picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { DatatableComponent } from './datatable/datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ListComponent } from './list/list.component';
import { DataTableModule } from 'primeng/datatable';
import { PaginatorModule } from 'primeng/paginator';
import { SocialComponent } from './social/social.component';
import { MaterialDataComponent } from './material-data/material-data.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { NgxModulesComponent } from './ngx-modules/ngx-modules.component';
// import { MatTableDataSource } from '@angular/material';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ModalModule } from 'ngx-bootstrap';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartComponent } from './chart/chart.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { EditorModule } from 'primeng/editor';
import { EditorComponent } from './editor/editor.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { CommonService } from './shared/common.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailsComponent,
    BookEditComponent,
    BookCreateComponent,
    MaterialComponent,
    FilterComponent,
    PaginationComponent,
    PickerComponent,
    DatatableComponent,
    ListComponent,
    SocialComponent,
    MaterialDataComponent,
    NgxModulesComponent,
    ChartComponent,
    LoginComponent,
    EditorComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent


  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    SpinnerModule,
    AutoCompleteModule,
    SelectButtonModule,
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BlockUIModule.forRoot(),
    TooltipModule.forRoot(),
    RatingModule.forRoot(),
    ModalModule.forRoot(),
    NgxDatatableModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    DataTableModule,
    PaginatorModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    // MatTableDataSource
    ToolbarModule,
    HttpClientModule,
    EditorModule

  ],
  // exports: [MatTableDataSource],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

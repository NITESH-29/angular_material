import { Routes, RouterModule } from "@angular/router";
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';
import { MaterialComponent } from './material/material.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PickerComponent } from './picker/picker.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ListComponent } from './list/list.component';
import { SocialComponent } from './social/social.component';
import { MaterialDataComponent } from './material-data/material-data.component';
import { NgxModulesComponent } from './ngx-modules/ngx-modules.component';
import { ChartComponent } from './chart/chart.component';
import { LoginComponent } from "./auth/login/login.component";
import { EditorComponent } from "./editor/editor.component";
import { RegisterComponent } from "./auth/register/register.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'create', component: BookCreateComponent },
    { path: 'edit', component: BookEditComponent },
    { path: 'details', component: BookDetailsComponent },
    { path: 'book', component: BookComponent },
    { path: 'mat', component: MaterialComponent },
    { path: 'item', component: FilterComponent },
    { path: 'page', component: PaginationComponent },
    { path: 'table', component: DatatableComponent },
    { path: 'prime', component: ListComponent },
    { path: 'social', component: SocialComponent },
    { path: 'material', component: MaterialDataComponent },
    { path: 'date', component: PickerComponent },
    { path: 'ngx', component: NgxModulesComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'editor', component: EditorComponent },
    { path: 'register', component: RegisterComponent },



];

export const routing = RouterModule.forRoot(APP_ROUTES);

import { Routes } from '@angular/router';
import { MainFormComponent } from './components/main-form/main-form.component';
import { SummaryTableComponent } from './components/summary-table/summary-table.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/all-in-fee', pathMatch: 'full' },
  { path: 'all-in-fee', component: MainFormComponent },
  { path: 'my-reports', component: SummaryTableComponent },
  { path: 'all-reports', component: SummaryTableComponent },
];

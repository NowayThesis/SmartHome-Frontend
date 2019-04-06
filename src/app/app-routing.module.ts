import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/search', pathMatch: 'full' },
  // { path: 'search', component: SearchComponent },
  // { path: 'history', component: HistoryComponent },
  // { path: 'page1', component: Page1Component },
  // { path: 'page2', component: Page2Component },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

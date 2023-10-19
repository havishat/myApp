import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { UsernameComponent } from './username/username.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  { path: 'username', pathMatch: 'full', component: UsernameComponent },
  { path: 'chatpage', pathMatch: 'full', component: ChatpageComponent },
  { path: 'analytics', pathMatch: 'full', component: AnalyticsComponent },
  { path: '**', redirectTo: 'username', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

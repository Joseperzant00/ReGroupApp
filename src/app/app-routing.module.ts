import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { GroupListComponent } from './components/group-list/group-list.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'chat-list',
    pathMatch: 'full'
  },
  {
    path: 'chat-list',
    component: ChatListComponent
  },
  {
    path: 'group-list',
    component: GroupListComponent
  },
  {
    path: 'chat/:id',
    component: ChatComponent
  },
  {
    path: 'chat/:id',
    component: ChatComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

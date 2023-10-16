import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ChatComponent } from 'src/app/components/chat/chat.component';
import { ChatListComponent } from 'src/app/components/chat-list/chat-list.component';
import { GroupListComponent } from 'src/app/components/group-list/group-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ChatComponent, ChatListComponent, GroupListComponent]
})
export class HomePageModule { }

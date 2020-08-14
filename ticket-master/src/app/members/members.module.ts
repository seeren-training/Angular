import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberComponent } from './member/member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { MembersComponent } from './members.component';
import { MembersRoutingModule } from './members-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MembersComponent,
    MemberComponent,
    MemberListComponent,
    MemberCreateComponent,
    MemberUpdateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MembersRoutingModule,
  ],
})
export class MembersModule { }

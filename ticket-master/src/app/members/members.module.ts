import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MemberComponent } from './member/member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberUpdateComponent } from './member-update/member-update.component';


@NgModule({
  declarations: [
    MemberComponent,
    MemberListComponent,
    MemberCreateComponent,
    MemberUpdateComponent,
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
  ],
})
export class MembersModule { }

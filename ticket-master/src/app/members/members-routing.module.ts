import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { MemberComponent } from './member/member.component';
import { MembersComponent } from './members.component';


const routes: Routes = [
  {
    path: "members",
    component: MembersComponent,
    children: [
      {
        path: "",
        component: MemberListComponent
      },
      {
        path: "create",
        component: MemberCreateComponent
      },
      {
        path: ":id/update",
        component: MemberUpdateComponent
      },
      {
        path: ":id",
        component: MemberComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }

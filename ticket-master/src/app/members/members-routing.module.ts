import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {
    path: "members",
    component: MemberListComponent
  },
  {
    path: "members/create", component: MemberCreateComponent
  },
  {
    path: "members/:id/update", component: MemberUpdateComponent
  },
  {
    path: "members/:id", component: MemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }

import { Component } from '@angular/core';

import { MemberListService } from 'src/app/shared/services/member-list.service';
import { Member } from 'src/app/shared/models/member.model';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent {

  public memberList: Member[];

  constructor(private memberListService: MemberListService) {
    this.memberListService.get().subscribe(
      (memberList: Member[]) => this.memberList = memberList,
      (error) => console.error("Error", error)
    );
  }

}

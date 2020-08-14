import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MemberListService } from './../../shared/services/member-list.service';


@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.scss']
})
export class MemberCreateComponent {

  constructor(
    private router: Router,
    private memberListService: MemberListService
  ) { }

  public create(): void {
    this.memberListService.post({
      id: 5,
      firstName: "John",
      lastName: "Doe",
      role: "Tester"
    });
    this.router.navigate(["members"]);
  }

}

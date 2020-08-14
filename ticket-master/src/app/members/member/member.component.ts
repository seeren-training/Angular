import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MemberListService } from 'src/app/shared/services/member-list.service';
import { Member } from 'src/app/shared/models/member.model';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  public member: Member;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private memberListService: MemberListService) { }

  public ngOnInit(): void {
    if (!(this.member = this.memberListService.getById(
      +this.route.snapshot.paramMap.get("id")
    ))) {
      this.router.navigate(["/members"]);
    }
  }

  public onDelete(): void {
    this.memberListService.delete(this.member);
    this.router.navigate(["/members"]);
  }

}

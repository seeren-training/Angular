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
  public memberListLength: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private memberListService: MemberListService) { }

  public ngOnInit(): void {
    this.memberListLength = this.memberListService.memberList.length;
    if (!(this.member = this.memberListService.find(
      +this.route.snapshot.paramMap.get("id")
    ))) {
      this.router.navigate(["/members"]);
    }
  }

  public onDelete(): void {
    const member: Member = this.member;
    this.member = null;
    this.memberListService.delete(member).subscribe(
      () => this.router.navigate(["/members"]),
      (error) => console.error(error),
    );
  }

}

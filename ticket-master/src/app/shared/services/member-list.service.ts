import { Injectable } from '@angular/core';

import { Member } from '../models/member.model';


@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  private memberList: Member[] = [];

  public post(member: Member): number {
    return this.memberList.push(member);
  }

  public get(): Member[] {
    return this.memberList;
  }

  public getById(id: number): Member | null {
    return this.memberList.find(member => id === member.id)
  }

  public delete(member: Member): Member {
    this.memberList.splice(
      this.memberList.indexOf(member),
      1
    );
    return member;
  }

}

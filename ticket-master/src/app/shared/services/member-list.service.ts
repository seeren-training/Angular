import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { jsonbin } from './../../../environments/jsonbin';
import { Member } from '../models/member.model';


@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  public memberList: Member[] = [];

  constructor(private http: HttpClient) { }

  public find(id: number): Member | null {
    return this.memberList.find(member => id === member.id)
  }

  public lastId(): number {
    let id: number = 0;
    this.memberList.forEach(member => id = id < member.id ? member.id : id)
    return id;
  }

  public get(): Observable<Member[]> {
    return this.http.get<Member[]>(jsonbin.bins.members, {
      headers: new HttpHeaders(jsonbin.headers)
    }).pipe(tap(memberList => this.memberList = memberList));
  }

  public post(member: Member): Observable<any> {
    this.memberList.push(member);
    return this.put();
  }

  public delete(member: Member): Observable<any> {
    this.memberList.splice(this.memberList.indexOf(member), 1);
    return this.put();
  }

  public put(): Observable<any> {
    return this.http.put(jsonbin.bins.members, this.memberList, {
      headers: new HttpHeaders(jsonbin.headers)
    });
  }

}

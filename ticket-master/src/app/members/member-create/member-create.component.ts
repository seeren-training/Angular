import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MemberListService } from './../../shared/services/member-list.service';


@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.scss']
})
export class MemberCreateComponent implements OnInit {

  public memberForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private memberListService: MemberListService
  ) { }

  ngOnInit(): void {
    this.memberForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      role: ['', Validators.required]
    }, { updateOn: "submit" });
  }

  public create(): void {
    if (this.memberForm.valid) {
      this.memberListService.post({
        id: this.memberListService.lastId() + 1,
        firstName: this.memberForm.controls.firstName.value,
        lastName: this.memberForm.controls.lastName.value,
        role: this.memberForm.controls.role.value
      }).subscribe(
        () => this.router.navigate(["members"]),
        (error) => console.error("Error", error)
      );
    }
  }

}

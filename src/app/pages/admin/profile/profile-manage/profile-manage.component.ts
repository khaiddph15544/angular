import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-manage.component.html',
  styleUrls: ['./profile-manage.component.css']
})
export class ProfileManageComponent implements OnInit {

  profile: any
  constructor(
    private ps: ProfileService
  ) { }

  ngOnInit(): void {
    this.ps.get().subscribe(data => {
      this.profile = data
    })
  }
}

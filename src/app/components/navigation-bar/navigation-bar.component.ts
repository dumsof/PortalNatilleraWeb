import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public onProfile() {

  /*   this.router.navigate(['users/profile']); */
  }

  public logout() {

   /*  this.authService.logout(this.returnUrl || '/'); */
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogout(){
    console.log('Sesión cerrada')
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataList: any;

  constructor(private httpClient: HttpClient, private router: Router) { }


  ngOnInit() {
    // assets/files/data.json
    const url = 'https://gist.githubusercontent.com/SiThuWin-cumdy/e05099a5928ad08340d146b10eca3b2f/raw/bdb0dd5339d365659e470476aaed3ad71ee75971/data.json';
    this.httpClient.get(url).subscribe(data => {
      this.dataList = data;
    })
  }

  clickBox(id) {
    let contentEle = document.getElementById('data_' + id);
    if (contentEle) {
      if (contentEle.style.backgroundColor == 'white' || contentEle.style.backgroundColor == '') {
        contentEle.style.backgroundColor = '#36b6ff';
      } else {
        contentEle.style.backgroundColor = 'white';
      }
    }
  }

  goToAboutPage() {
    this.router.navigate(['/about']);
  }

  goToContactPage() {
    this.router.navigate(['/contact']);
  }
  goToSignUpPage() {
    this.router.navigate(['/sign-up']);
  }
  goToHomePage() {
    this.router.navigate(['/']);
  }
}

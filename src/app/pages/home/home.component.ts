import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // public onPsScrollY(event) {
  // tslint:disable-next-line:max-line-length
  //   (event.target.scrollTop > 300) ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';
  //   const currentScrollTop = (event.target.scrollTop > 56) ? event.target.scrollTop : 0;
  //   (currentScrollTop > this.lastScrollTop) ? this.isStickyMenu = true : this.isStickyMenu = false;
  //   this.lastScrollTop = currentScrollTop;
  // }

}

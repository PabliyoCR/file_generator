import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LINK } from 'src/app/pages/generators/link.model';
import { Location } from '@angular/common';
import data from 'src/assets/data/navigation.json';

@Component({
  selector: 'div[app-navigation]',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  links: LINK[];
  currentPath: string;

  constructor(private router: Router, private location: Location) {
    this.links = [];
    this.currentPath = this.location.path();
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this.location.path();
        this.checkURL();
      }
    });
  }

  ngOnInit(): void {}

  checkURL() {
    this.links =
      data.find((el) => el.path === this.location.path())?.links || [];
  }
}

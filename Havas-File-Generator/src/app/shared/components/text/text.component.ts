import { Component, Input, OnInit } from '@angular/core';
import { ROW } from '../../models/sheet.model';

@Component({
  selector: 'div[app-text]',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() row!: ROW; 

  constructor() { }

  ngOnInit(): void {
  }

}

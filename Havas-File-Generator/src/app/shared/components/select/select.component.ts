import { Component, Input, OnInit } from '@angular/core';
import { ROW } from '../../models/sheet.model';

@Component({
  selector: 'div[app-select]',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options : string[] = []
  @Input() row!: ROW;

  value : string = ""

  constructor() { }

  ngOnInit(): void {
    this.value = this.row.value_default
  }


  selectChange(e : Event){
     this.value = (e.target as HTMLInputElement).value;
  }
}

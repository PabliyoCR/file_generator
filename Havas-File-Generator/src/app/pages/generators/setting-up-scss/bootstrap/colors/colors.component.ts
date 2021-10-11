import { Component, Input, OnInit } from '@angular/core';
import { ROW } from 'src/app/shared/models/sheet.model';
import { ColorService } from 'src/app/shared/services/generators/color.service';

@Component({
  selector: 'div[app-colors]',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  @Input() row!: ROW; 

  constructor(private colorService : ColorService) { }

  ngOnInit(): void {
    this.colorService.colors.push(this.row.property)
  }
}

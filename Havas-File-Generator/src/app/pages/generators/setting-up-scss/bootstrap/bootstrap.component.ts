import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { SHEET } from 'src/app/shared/models/sheet.model';
import { ColorService } from 'src/app/shared/services/generators/color.service';
import { FILE, LINE } from 'src/app/shared/models/file.model';
import FileSaver from 'file-saver';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
})
export class BootstrapComponent implements OnInit {
  sheets : SHEET[] = [];
  templates : string[] = []
  regexp = new RegExp(/^template_.*$/)
  types = ['text', 'color']

  constructor(private http: HttpClient, public colorService : ColorService, private cdref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.http
      .get('/assets/data/template/bootstrap.xlsx', { responseType: 'blob' })
      .subscribe((res) => {
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
          const bstr: string = e.target.result;
          const workbook = XLSX.read(bstr, { type: 'binary' });
          
          Object.keys(workbook.Sheets).forEach(key => {
            let sheet: SHEET = {
              name: '',
              rows : []
            };
            sheet.name = key;
            sheet.rows = XLSX.utils.sheet_to_json(workbook.Sheets[key]);

            // Categorias
            (XLSX.utils.sheet_to_json(workbook.Sheets[key], { header : 1 })[0] as Array<string>).forEach((col : string) => {
              if(this.regexp.test(col)){
                let template_title = col.replace("template_", "")
                if(this.templates.indexOf(template_title) < 0){
                  this.templates.push(template_title)
                } 
              }
            });
            this.sheets.push(sheet)
          });
        };
        reader.readAsBinaryString(res);
      });
  }

  ngAfterContentChecked(){
    this.cdref.detectChanges();
  }

  changeTemplate(template : string){
    document.querySelectorAll('input[type=checkbox]').forEach( checkbox => {
      (checkbox as HTMLInputElement).checked = false
    })
    this.sheets.forEach((sheet : SHEET) => {
      sheet.rows.forEach((row : any) => {
        if(row["template_" + template]){
          row.value_default = row["template_" + template];
          (document.getElementById(row.property) as HTMLInputElement).checked = true
        }
      })
    })
  }

  addVariable(sheetName : string){
    const property = (document.getElementById("input"+sheetName) as HTMLInputElement).value
    const type = (document.getElementById("input_type"+sheetName) as HTMLInputElement).value
    if(property && type){
      this.sheets.find(sheet => sheet.name == sheetName)?.rows.unshift({property, type, value_default : ''});
    } 
  }

  generateFiles(){
    let files : FILE[] = [];

    document.querySelectorAll('.file_content').forEach(fileContent => {
      let file : FILE = {
        name : fileContent.id,
        lines : []
      }
      fileContent.querySelectorAll("input[type=checkbox]").forEach(input => {
        let line : LINE = {
          property : input.id,
          value : (input.parentElement?.querySelector('input.value') as HTMLInputElement).value,
          enabled : (input as HTMLInputElement).checked
        }
        file.lines.push(line)
      })
      files.push(file)
    });

    files.forEach(file => {
      let fileText = "";
      file.lines.forEach(line => {
        if(!line.enabled){
          fileText += '//'
        }
        fileText += `${line.property} : ${line.value};\n`
      })
      var blob = new Blob([fileText], {type: "text/plain;charset=utf-8"});
      FileSaver.saveAs(blob, file.name + ".sass");
    })
  }
}

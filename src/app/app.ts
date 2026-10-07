import { Component , ViewChild} from '@angular/core';
import { GridModule, PageService,SelectionService , GridComponent} from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridModule],
  providers: [PageService,SelectionService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  @ViewChild('grid')
  public grid?: GridComponent;
  public data = data;
  public selectionOptions = {
  type: 'Multiple',
  mode: 'Cell'
};
  dataBound(){
    let header = (this.grid as GridComponent).getHeaderContent().querySelector('.e-headercell');
    (header as HTMLElement).style.backgroundColor = '#ede9fe';
    (header as HTMLElement).style.color = '#5b21b6';
    let cell = (this.grid as GridComponent).getCellFromIndex(2,4);
    (cell as HTMLElement).style.background = '#ccfbf1';
    (cell as HTMLElement).style.color = '#0f766e';
  }
  public customizeCell(args: any): void {
    if (args.column.field==='Freight') {
      if (args.data.Freight < 30) {
        args.cell.classList.add('below-30');
      } else {
        args.cell.classList.add('above-30');
      }
    }
  }
  public pageSettings = {
  pageSize: 7
  };
 
}
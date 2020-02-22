import { Component, OnInit } from '@angular/core';

import { Reserve } from '../../class/reserve';
import { ManageReserveService } from '../service/manage-reserve.service';
import { Store } from '@ngrx/store';
import * as fromReserve from '../store/reserve.reducer';

@Component({
  selector: 'app-manage-reserve',
  templateUrl: './manage-reserve.component.html',
  styleUrls: ['./manage-reserve.component.scss']
})
export class ManageReserveComponent implements OnInit {

  reserves: Reserve[];
  input_date = 20200101;
  input_compulsion = false

  constructor(private reserve: Store<fromReserve.State>,
              private manageReserveService: ManageReserveService) { }

  ngOnInit() {
    this.reserve.select(fromReserve.selectAllReserves).subscribe(
      reserves => {
        this.reserves = reserves
      }
    )
  }

  add(): void {
    this.manageReserveService.add(
      new Reserve(this.input_date, this.input_compulsion)
    );
  }

  delete(id: string): void {
    this.manageReserveService.delete(id);
  }

}

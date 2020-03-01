import { Component, OnInit } from '@angular/core';

import { Now } from '../../class/now';
import { ManageNowService } from '../service/manage-now.service';
import { Store } from '@ngrx/store';
import * as fromNow from '../store/now.reducer';

@Component({
  selector: 'app-manage-now',
  templateUrl: './manage-now.component.html',
  styleUrls: ['./manage-now.component.scss']
})
export class ManageNowComponent implements OnInit {

  nows: Now[];
  input_uid = '';
  input_campusId = 0;
  editList = []

  constructor(private now: Store<fromNow.State>,
              private manageNowService: ManageNowService) { }

  ngOnInit() {
    this.now.select(fromNow.selectAllNows).subscribe(
      nows => {
        this.editList = [];
        this.nows = nows;
        nows.forEach(now => {
          this.editList.push(
            new Now(now.uid, now.campusId, now.time)
          );
        })
      }
    )
  }

  // 1 => 01, 2 => 02
  getdoubleDigestNumber(number: number): string {
    return ("0" + number).slice(-2)
  }

  add() {
    const now = new Date()

    this.manageNowService.add(
      new Now(
        this.input_uid,
        this.input_campusId,
        Number(`${now.getHours()}${this.getdoubleDigestNumber(now.getMinutes())}${this.getdoubleDigestNumber(now.getSeconds())}`)
      )
    );
  }

  update(id: string, now: Now) {
    this.manageNowService.update(id, now);
  }

  delete(id: string) {
    this.manageNowService.delete(id);
  }

}

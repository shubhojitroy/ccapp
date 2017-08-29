import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'ccapp-termpage',
  templateUrl: './termpage.component.html',
  styleUrls: ['./termpage.component.scss']
})
export class TermpageComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  toggleBlock1: boolean = false;
  toggleBlock2: boolean = false;
  toggleBlock3: boolean = false;
  status: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  path = 'caret-down-solid.svg';
  path2 = 'caret-down-solid.svg';
  path3 = 'caret-down-solid.svg';
  /*
    accordion = [
      { id: 0, title: "What is Angular-Devices?", text: "any text1", isDisplay: true },
      { id: 1, title: "How to add a device?", text: "any text2", isDisplay: true },
      { id: 2, title: "How to add a device with a csv file?", text: "any text3", isDisplay: true }
    ];
  */
  ngOnInit() {
  }
  /*
    toggleAction(id) {
      console.log(id);
      this.accordion[id].isDisplay = !this.accordion[id].isDisplay;
    }
    */
  changeImage() {

    this.status = !this.status;
    if (this.status == true) {
      this.path = 'caret-up-solid.svg';
    } else {
      this.path = 'caret-down-solid.svg';
    }
  }

  changeImage2() {

    this.status2 = !this.status2;
    if (this.status2 == true) {
      this.path2 = 'caret-up-solid.svg';
    } else {
      this.path2 = 'caret-down-solid.svg';
    }
  }

  changeImage3() {

    this.status3 = !this.status3;
    if (this.status3 == true) {
      this.path3 = 'caret-up-solid.svg';
    } else {
      this.path3 = 'caret-down-solid.svg';
    }
  }
}

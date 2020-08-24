import { Component, OnInit } from "@angular/core";
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: "app-device",
  templateUrl: "./device.component.html",
  styleUrls: ["./device.component.scss"]
})
export class DeviceComponent implements OnInit {

  id: number;
  name: string;
  deviceName: string;
  device_Name: string;
  owner_Name: string;
  checkAll: boolean = false;
  p: number = 1;
  filter: string;

  devicesList = [
    { id: 0, deviceName: 'Computer', name: 'DUBOIS', checked: false },
    { id: 1, deviceName: 'Washer', name: 'DUPONT', checked: false },
    { id: 2, deviceName: 'Coffee machine', name: 'MERCIER', checked: false },
    { id: 3, deviceName: 'Smartphone', name: 'VINCENT', checked: false },
    { id: 4, deviceName: 'TV', name: 'MARTIN', checked: false }
  ];

  trash = [];

  constructor() { }

  ngOnInit() { }

  checkboxChange(deviceId: number) {
    for (let i = 0; i < this.devicesList.length; i++) {
      if (this.devicesList[i].id === deviceId) {
        this.devicesList[i].checked = !this.devicesList[i].checked;
      }
    }
  }

  countTotalChecked() {
    let total = 0;
    for (let i = 0; i < this.devicesList.length; i++) {
      if (this.devicesList[i].checked === true) {
        total++;
      }
    }
    return total;
  }

  checkedAll(event) {
    for (let i = 0; i < this.devicesList.length; i++) {
      this.devicesList[i].checked = event.target.checked;
    }
  }

  changeListener(files: FileList) {

    if (files && files.length > 0) {
      let file: File = files.item(0);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        const chars = csv.split("\n");

        for (let j = 0; j < chars.length; j++) {
          let str = chars[j].split(';');
          if (str[0] != "" && str[1] != "") {
            let newId = this.devicesList.length + 1;
            this.devicesList.push({ 'id': newId, 'deviceName': str[0], 'name': str[1], 'checked': false });
          }
        }
      }
    }
  }

  delete() {
    for (let i = this.devicesList.length - 1; i >= 0; i--) {
      if (this.devicesList[i].checked) {
        this.trash.push(this.devicesList[i]);
        this.devicesList.splice(i, 1);

      }
    }
    this.checkAll = false;
  }

  deleteAll() {
    for (let i = this.devicesList.length - 1; i >= 0; i--) {
      this.trash.push(this.devicesList[i]);
      this.devicesList.splice(i, 1);
    }
    this.checkAll = false;
  }

  /*
  newWindow() {
    window.open(this.router.createUrlTree(['/page', 1, 2]).toString(), '_blank');
  }
  */

  reset() {
    this.devicesList = [
      { id: 0, deviceName: 'Computer', name: 'DUBOIS', checked: false },
      { id: 1, deviceName: 'Washer', name: 'DUPONT', checked: false },
      { id: 2, deviceName: 'Coffee machine', name: 'MERCIER', checked: false },
      { id: 3, deviceName: 'Smartphone', name: 'VINCENT', checked: false },
      { id: 4, deviceName: 'TV', name: 'MARTIN', checked: false }
    ];
    this.id = null;
    this.name = '';
    this.deviceName = '';
    this.checkAll = false;
  }

  clean() {
    this.trash = []
  }

  sortAsc() {
    for (let ind01 = this.devicesList.length - 1; ind01 >= 0; ind01--) {
      let temp;
      for (let ind02 = this.devicesList.length - 1; ind02 >= 0; ind02--) {
        if (this.devicesList[ind02].id < this.devicesList[ind01].id) {
          temp = this.devicesList[ind02];
          this.devicesList[ind02] = this.devicesList[ind01];
          this.devicesList[ind01] = temp;
        }
      }
    }
  }

  sortDesc() {
    for (let ind01 = this.devicesList.length - 1; ind01 >= 0; ind01--) {
      let temp;
      for (let ind02 = this.devicesList.length - 1; ind02 >= 0; ind02--) {
        if (this.devicesList[ind02].id > this.devicesList[ind01].id) {
          temp = this.devicesList[ind02];
          this.devicesList[ind02] = this.devicesList[ind01];
          this.devicesList[ind01] = temp;
        }
      }
    }
  }

  searchById(searchNumber) {
    this.devicesList = this.devicesList.filter(device => {

      return device.id == searchNumber
    });
  }

  searchByDeviceName(searchString) {

    this.devicesList = this.devicesList.filter(device => {

      return device.deviceName.toLocaleLowerCase().indexOf(searchString.toLowerCase()) !== -1
    });
  }

  searchByOwnerName(searchString) {

    this.devicesList = this.devicesList.filter(device => {

      return device.name.toLocaleLowerCase().indexOf(searchString.toLowerCase()) !== -1
    });
  }

  addDevice(event) {

    let strDevice = event.target.form[0].value;
    let strOwner = event.target.form[1].value;

    if (strDevice.length !== 0 && strOwner.length !== 0) {
      let newId = this.devicesList.length + 1;
      this.devicesList.push({ 'id': newId, 'deviceName': strDevice, 'name': strOwner, 'checked': false });
    }
    this.device_Name = '';
    this.owner_Name = '';
  }

}
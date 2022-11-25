import { Component, OnInit } from '@angular/core';
import { CacheItem, LocalServiceService } from 'src/app/Service/db-service';

interface DropdownButtonElement {
  dropwdonId: number;
  viewValue: string;
}
class CalculateListBoxProfile {
  id: number;
  material: string;
  tValue: number;
  hValue: number;
  wValue: number;
  LValue: number;
  PieceeValue: number;
  ResultValue: string;
}
class CalculationsBP {
  items: CalculateListBoxProfile[] = [];
}
@Component({
  selector: 'app-box-profile',
  templateUrl: './box-profile.component.html',
  styleUrls: ['./box-profile.component.css']
})
export class BoxProfileComponent implements OnInit {
  BoxProfileView: string = "../assets/BoxProfile.PNG";
  DropdownSelected: DropdownButtonElement[] = [
    { dropwdonId: 0, viewValue: 'Paslanmaz', },
    { dropwdonId: 1, viewValue: 'Demir', }
  ];
  Dropdwonid: number = null;
  SelectedDropdownLabel: string = null;
  t: number;
  h: number;
  w: number;
  L: number;
  piecee: number;
  result: string = '';
  CalculateListBP: CalculateListBoxProfile[] = [];
  constructor (public localService: LocalServiceService) {
    this.CalculateListBP = this.getBoxProfileListFromLS();
  }
  changeDropdownBP() {
    this.Dropdwonid = this.DropdownSelected[0].dropwdonId;
  }
  CalculateBP() {
    this.SelectedDropdownLabel = this.DropdownSelected[this.Dropdwonid].viewValue;
    let id = Math.random() * 10;
    if (this.SelectedDropdownLabel === "Demir") {
      this.result = ((((this.h / 1000) * (this.w / 1000) * (this.L / 1000)) - ((this.L / 1000) * ((this.h - 2 * this.t) / 1000) * ((this.w - 2 * this.t) / 1000))) * 7.86 * 1000 * this.piecee).toFixed(2);
    } else {
      this.result = ((((this.h / 1000) * (this.w / 1000) * (this.L / 1000)) - ((this.L / 1000) * ((this.h - 2 * this.t) / 1000) * ((this.w - 2 * this.t) / 1000))) * 8 * 1000 * this.piecee).toFixed(2);
    }
    const data = {
      id: id, material: this.SelectedDropdownLabel, tValue: this.t, hValue: this.h, wValue: this.w, LValue: this.L, PieceeValue: this.piecee, ResultValue: this.result
    } as CalculateListBoxProfile;

    this.CalculateListBP.push(data);
    let existingData: CalculationsBP = this.localService.getItem<CalculationsBP>(CacheItem.BPcalculate) ?? new CalculationsBP();
    existingData.items.push(data);
    this.localService.setItem(CacheItem.BPcalculate, existingData);
    this.ResetInputBP();
  }
  getBoxProfileListFromLS() {
    let existingData = this.localService.getItem<CalculationsBP>(CacheItem.BPcalculate);
    return existingData?.items ?? [];
  }
  RemoveItemBoxProfieList(item: CalculateListBoxProfile) {
    let existingData: CalculationsBP = this.localService.getItem<CalculationsBP>(CacheItem.BPcalculate) ?? new CalculationsBP();
    let newData = new CalculationsBP();
    existingData.items.forEach((each) => {
      if (each.id !== item.id) newData.items.push(each);
      this.localService.setItem(CacheItem.BPcalculate, newData);
      this.CalculateListBP = newData.items;
    });
  }
  clearAllBoxProfileLS() {
    this.localService.removeItem(CacheItem.BPcalculate);
    this.CalculateListBP = [];
  }
  ResetInputBP() {
    this.piecee = null;
    this.t = null;
    this.h = null;
    this.w = null;
    this.L = null;
    this.result = null;
    this.Dropdwonid = null;
  }
  ngOnInit(): void {
  }
}

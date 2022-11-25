import { Component, OnInit, } from '@angular/core';
import { CacheItem, LocalServiceService } from 'src/app/Service/db-service';

interface DropdownButtonElement {
  dropwdonId: number;
  viewValue: string;
}
class CalculateListMetalSheet {
  id: number;
  material: string;
  tValue: number;
  wValue: number;
  LongValue: number;
  PieceeValue: number;
  ResultValue: string;
}
class CalculationsMS {
  items: CalculateListMetalSheet[] = [];
}
@Component({
  selector: 'app-metal-sheet',
  templateUrl: './metal-sheet.component.html',
  styleUrls: ['./metal-sheet.component.css']
})
export class MetalSheetComponent implements OnInit {
  MetalSheetView: string = '../assets/MetalSheet.PNG';
  DropdownSelected: DropdownButtonElement[] = [
    { dropwdonId: 0, viewValue: 'Paslanmaz', },
    { dropwdonId: 1, viewValue: 'Demir', }
  ];
  Dropdwonid: number = null;
  SelectedDropdownLabel: string = null;
  t: number;
  w: number;
  L: number;
  piecee: number;
  result: string = '';
  CalculateListMS: CalculateListMetalSheet[] = [];
  constructor (public localService: LocalServiceService) {
    this.CalculateListMS = this.getMetalSheetListFromLS();
  }
  changeDropdownMS() {
    this.Dropdwonid = this.DropdownSelected[0].dropwdonId;
  }
  CalculateMS() {
    this.SelectedDropdownLabel = this.DropdownSelected[this.Dropdwonid].viewValue;
    let id = Math.random() * 10;
    if (this.SelectedDropdownLabel === "Demir") {
      this.result = (((this.t / 1000)) * (this.w / 1000) * (this.L / 1000) * 7.86 * 1000 * this.piecee).toFixed(2);
    } else {
      this.result = ((((this.t) / 1000)) * ((this.w) / 1000) * ((this.L) / 1000) * 8 * 1000 * (this.piecee)).toFixed(2);
    }
    const data = {
      id: id, material: this.SelectedDropdownLabel, tValue: this.t, wValue: this.w, LongValue: this.L, PieceeValue: this.piecee, ResultValue: this.result
    } as CalculateListMetalSheet;
    this.CalculateListMS.push(data);
    let existingData: CalculationsMS = this.localService.getItem<CalculationsMS>(CacheItem.MScalculate) ?? new CalculationsMS();
    existingData.items.push(data);
    this.localService.setItem(CacheItem.MScalculate, existingData);
    this.ResetInputMS();
  }
  getMetalSheetListFromLS() {
    let existingData = this.localService.getItem<CalculationsMS>(CacheItem.MScalculate);
    return existingData?.items ?? [];
  }
  RemoveItemMetalSheetList(item: CalculateListMetalSheet) {
    let existingData: CalculationsMS = this.localService.getItem<CalculationsMS>(CacheItem.MScalculate) ?? new CalculationsMS();
    let newData = new CalculationsMS();
    existingData.items.forEach((each) => {
      if (each.id !== item.id) newData.items.push(each);
      this.localService.setItem(CacheItem.MScalculate, newData);
      this.CalculateListMS = newData.items;
    });
  }
  clearAllMetalSheetLS() {
    this.localService.removeItem(CacheItem.MScalculate);
    this.CalculateListMS = [];
  }
  ResetInputMS() {
    this.piecee = null;
    this.t = null;
    this.w = null;
    this.L = null;
    this.result = null;
    this.Dropdwonid = null;
  }
  ngOnInit(): void {
  }
}

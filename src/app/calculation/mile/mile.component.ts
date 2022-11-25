import { Component, OnInit } from '@angular/core';
import { CacheItem, LocalServiceService } from 'src/app/Service/db-service';

interface DropdownButtonElement {
  dropwdonId: number;
  viewValue: string;
}
class CalculateListMile {
  id: number;
  material: string;
  dValue: number;
  LongValue: number;
  PieceeValue: number;
  ResultValue: string;
}
class CalculationsMile {
  items: CalculateListMile[] = [];
}
@Component({
  selector: 'app-mile',
  templateUrl: './mile.component.html',
  styleUrls: ['./mile.component.css']
})
export class MileComponent implements OnInit {
  MileView: string = "../assets/Mil.PNG";
  DropdownSelected: DropdownButtonElement[] = [
    { dropwdonId: 0, viewValue: 'Paslanmaz', },
    { dropwdonId: 1, viewValue: 'Demir', }
  ];
  Dropdwonid: number = null;
  SelectedDropdownLabel: string = null;
  d: number;
  Long: number;
  piecee: number;
  result: string = '';
  CalculateListMile: CalculateListMile[] = [];
  constructor (public localService: LocalServiceService) {
    this.CalculateListMile = this.getMileListFromLS();
  }
  changeDropdownMile() {
    this.Dropdwonid = this.DropdownSelected[0].dropwdonId;
  }
  CalculateMile() {
    this.SelectedDropdownLabel = this.DropdownSelected[this.Dropdwonid].viewValue;
    let id = Math.random() * 10;
    if (this.SelectedDropdownLabel === "Demir") {
      this.result = (3.14 * (this.d / 2000) * (this.d / 2000) * (this.Long / 2000) * 7.86 * 1000 * this.piecee).toFixed(2);
    } else {
      this.result = (3.14 * (this.d / 2000) * (this.d / 2000) * (this.Long / 2000) * 8 * 1000 * this.piecee).toFixed(2);
    }
    const data = { id: id, material: this.SelectedDropdownLabel, dValue: this.d, LongValue: this.Long, PieceeValue: this.piecee, ResultValue: this.result } as CalculateListMile;
    this.CalculateListMile.push(data);
    let existingData: CalculationsMile = this.localService.getItem<CalculationsMile>(CacheItem.MileCalculateLS) ?? new CalculationsMile();
    existingData.items.push(data);
    this.localService.setItem(CacheItem.MileCalculateLS, existingData);
    this.ResetInputMile();
  }
  getMileListFromLS() {
    let existingData = this.localService.getItem<CalculationsMile>(CacheItem.MileCalculateLS);
    return existingData?.items ?? [];
  }
  RemoveItemMileList(item: CalculateListMile) {
    let existingData: CalculationsMile = this.localService.getItem<CalculationsMile>(CacheItem.MileCalculateLS) ?? new CalculationsMile();
    let newData = new CalculationsMile();
    existingData.items.forEach((each) => {
      if (each.id !== item.id) newData.items.push(each);
      this.localService.setItem(CacheItem.MileCalculateLS, newData);
      this.CalculateListMile = newData.items;
    });
  }
  clearAllMileLS() {
    this.localService.removeItem(CacheItem.MileCalculateLS);
    this.CalculateListMile = [];
  }
  ResetInputMile() {
    this.piecee = null;
    this.d = null;
    this.Long = null;
    this.result = null;
    this.Dropdwonid = null;
  }
  ngOnInit(): void {
  }
}

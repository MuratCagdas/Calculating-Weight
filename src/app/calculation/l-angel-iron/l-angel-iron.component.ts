import { Component, OnInit } from '@angular/core';
import { CacheItem, LocalServiceService } from 'src/app/Service/db-service';
interface DropdownButtonElement {
  dropwdonId: number;
  viewValue: string;
}
class CalculateListAngelIron {
  id: number;
  material: string;
  tValue: number;
  L1Value: number;
  L2Value: number;
  LongValue: number;
  PieceeValue: number;
  ResultValue: string;
}
class CalculationsAI {
  items: CalculateListAngelIron[] = [];
}
@Component({
  selector: 'app-l-angel-iron',
  templateUrl: './l-angel-iron.component.html',
  styleUrls: ['./l-angel-iron.component.css']
})
export class LAngelIronComponent implements OnInit {

  AngelIronView: string = "../assets/L.PNG";
  DropdownSelected: DropdownButtonElement[] = [
    { dropwdonId: 0, viewValue: 'Paslanmaz', },
    { dropwdonId: 1, viewValue: 'Demir', }
  ];
  Dropdwonid: number = null;
  SelectedDropdownLabel: string = null;
  t: number;
  L1: number;
  L2: number;
  Long: number;
  piecee: number;
  result: string = '';
  CalculateListAI: CalculateListAngelIron[] = [];
  constructor (public localService: LocalServiceService) {
    this.CalculateListAI = this.getAngelIronListFromLS();
  }
  changeDropdownAI() {
    this.Dropdwonid = this.DropdownSelected[0].dropwdonId;
  }
  CalculateAI() {
    this.SelectedDropdownLabel = this.DropdownSelected[this.Dropdwonid].viewValue;
    let id = Math.random() * 10;
    if (this.SelectedDropdownLabel === "Demir") {
      this.result = ((((this.Long / 1000) * (this.L1 / 1000) * (this.L2 / 1000)) - ((this.Long / 1000) * ((this.L1 - this.t) / 1000) * ((this.L2 - this.t) / 1000))) * 7.86 * 1000 * this.piecee).toFixed(2);
    } else {
      this.result = ((((this.Long / 1000) * (this.L1 / 1000) * (this.L2 / 1000)) - ((this.Long / 1000) * ((this.L1 - this.t) / 1000) * ((this.L2 - this.t) / 1000))) * 8 * 1000 * this.piecee).toFixed(2);
    }
    const data = {
      id: id, material: this.SelectedDropdownLabel, tValue: this.t, L1Value: this.L1, L2Value: this.L2, LongValue: this.Long, PieceeValue: this.piecee, ResultValue: this.result
    } as CalculateListAngelIron;
    this.CalculateListAI.push(data);
    let existingData: CalculationsAI = this.localService.getItem<CalculationsAI>(CacheItem.AIcalculate) ?? new CalculationsAI();
    existingData.items.push(data);
    this.localService.setItem(CacheItem.AIcalculate, existingData);
    this.ResetInputAI();
  }
  getAngelIronListFromLS() {
    let existingData = this.localService.getItem<CalculationsAI>(CacheItem.AIcalculate);
    return existingData?.items ?? [];
  }
  RemoveItemAngelIronList(item: CalculateListAngelIron) {
    let existingData: CalculationsAI = this.localService.getItem<CalculationsAI>(CacheItem.AIcalculate) ?? new CalculationsAI();
    let newData = new CalculationsAI();
    existingData.items.forEach((each) => {
      if (each.id !== item.id) newData.items.push(each);
      this.localService.setItem(CacheItem.AIcalculate, newData);
      this.CalculateListAI = newData.items;
    });
  }
  clearAllAngelIronLS() {
    this.localService.removeItem(CacheItem.AIcalculate);
    this.CalculateListAI = [];
  }
  ResetInputAI() {
    this.piecee = null;
    this.t = null;
    this.L1 = null;
    this.L2 = null;
    this.Long = null;
    this.result = null;
    this.Dropdwonid = null;
  }
  ngOnInit(): void {
  }
}

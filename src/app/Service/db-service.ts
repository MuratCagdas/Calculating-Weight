import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {
  constructor () { }
  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify({ value }));
  }
  public getItem<T>(key: string): T | null {
    const data: string | null = localStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data).value;
    }
    return null;
  }
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

}
export enum CacheItem {
  MScalculate = "MetalSheet",
  BPcalculate = "BoxProfile",
  AIcalculate = "AngelIron",
  MileCalculateLS = "Mile"
}
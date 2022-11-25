import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BoxProfileComponent } from './calculation/box-profile/box-profile.component';
import { CalculationComponent } from './calculation/calculation.component';
import { LAngelIronComponent } from './calculation/l-angel-iron/l-angel-iron.component';
import { MetalSheetComponent } from './calculation/metal-sheet/metal-sheet.component';
import { MileComponent } from './calculation/mile/mile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Cal', component: CalculationComponent },
  { path: 'Mile', component: MileComponent },
  { path: 'LAngel', component: LAngelIronComponent },
  { path: 'BProfile', component: BoxProfileComponent },
  { path: 'Msheet', component: MetalSheetComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

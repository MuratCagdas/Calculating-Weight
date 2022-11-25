import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalculationComponent } from './calculation/calculation.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MileComponent } from './calculation/mile/mile.component';
import { LAngelIronComponent } from './calculation/l-angel-iron/l-angel-iron.component';
import { BoxProfileComponent } from './calculation/box-profile/box-profile.component';
import { MetalSheetComponent } from './calculation/metal-sheet/metal-sheet.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { LocalServiceService } from './Service/db-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculationComponent,
    NavBarComponent,
    MileComponent,
    LAngelIronComponent,
    BoxProfileComponent,
    MetalSheetComponent,

  ],
  imports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule {
  public constructor (
    private readonly localStorage: LocalServiceService,
  ) {
    this.localStorage.setItem('localStorage', 'my local storage value');
  }
}

import { Component } from '@angular/core';

import { CarrosPage } from '../carros/carros';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CarrosPage;
  tab2Root: any = FavoritosPage;

  constructor() {

  }
}

import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesService } from '../groceries.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public alertController: AlertController, public groceriesService: GroceriesService, public inputDialogService: InputDialogService) {}

  title = 'Grocery List';

  loadItems() {
    return this.groceriesService.getItems();
  }

  removeItem(i: number) {
    this.groceriesService.removeItem(i);
  }

  addItem() {
    this.inputDialogService.showPrompt()
  }

  editItem(item: {name: string, quantity: number}, i: number) {
    this.inputDialogService.showPrompt(item, i)
  }
}



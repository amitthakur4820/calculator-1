import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-tabs',
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.css']
})
export class NavigationTabsComponent {
  selectedTab: string = 'persona';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}

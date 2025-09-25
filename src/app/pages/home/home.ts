import { Component } from '@angular/core';
import { BigCard } from "../../components/big-card/big-card";
import { MenuTitle } from "../../components/menu-title/menu-title";
import { SmallCard } from "../../components/small-card/small-card";

@Component({
  selector: 'app-home',
  imports: [BigCard, MenuTitle, SmallCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

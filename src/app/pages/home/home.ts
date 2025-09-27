import { Component } from '@angular/core';
import { BigCard } from "../../components/big-card/big-card";
import { MenuTitle } from "../../components/menu-title/menu-title";
import { SmallCard } from "../../components/small-card/small-card";
import { MenuBar } from '../../components/menu-bar/menu-bar';

@Component({
  selector: 'app-home',
  imports: [BigCard, MenuTitle, SmallCard, MenuBar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

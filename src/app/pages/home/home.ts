import { Component } from '@angular/core';
import { BigCard } from "../../components/big-card/big-card";
import { MenuTitle } from "../../components/menu-title/menu-title";

@Component({
  selector: 'app-home',
  imports: [BigCard, MenuTitle],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

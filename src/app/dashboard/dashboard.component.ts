import { Component, OnInit, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Card } from "../core/interfaces/cards";
import { EventEmitter } from '@angular/core';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  cards: Array<Card>;
  @Output() isLoaded = new EventEmitter(); // output property to emit the changed value

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get("/api/skills").subscribe((ret: Array<Card>) => {
      this.cards = ret;
      console.log("loaded");
      const isLoaded = true;
      this.isLoaded.emit(isLoaded);
    });
  }
}

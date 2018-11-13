import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("filterAnimation", [
      transition("void => *", [
        style({ transform: "scale(0)" }),
        animate("300ms 300ms ease-out")
      ]),
      transition("* => void", [
        animate("300ms ease-out", style({ transform: "scale(0)" }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

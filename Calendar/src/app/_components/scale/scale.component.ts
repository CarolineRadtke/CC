import { Component, OnInit } from '@angular/core';

interface Itest {
  name: String;
}
@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.css'],
})
export class ScaleComponent implements OnInit {
  // die Start und Endzeit variabel halten
  public $times: { start: number; end: number };
  public timesStrings: String[];
  public test: Itest[];

  constructor() {
    this.$times = { start: 9, end: 9 };
    this.timesStrings = [''];
  }

  ngOnInit(): void {
    this.generateScaleArray();
  }

  public generateScaleArray(): void {
    const start = this.$times.start;
    for (let i = start; i < 13; i++) {
      this.timesStrings.push(`${i}:00 AM`);
      this.timesStrings.push(`${i}:30`);
    }
    for (let j = 1; j <= this.$times.end - 1; j++) {
      this.timesStrings.push(`${j}:00 PM`);
      this.timesStrings.push(`${j}:30`);
    }
    this.timesStrings.push(`${this.$times.end}:00 PM`);
    this.timesStrings.shift();
  }
}

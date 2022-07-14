import { Component, OnInit } from '@angular/core';
import { CounterHelper } from 'src/app/store/counter/counter.helper';

@Component({
  selector: 'papernest-up-page',
  templateUrl: './up-page.component.html',
  styleUrls: ['./up-page.component.scss']
})
export class UpPageComponent implements OnInit {
  constructor(private counterHelper: CounterHelper) {}

  ngOnInit(): void {
    this.counterHelper.incrementCounter(1, 1, 1);
  }
}

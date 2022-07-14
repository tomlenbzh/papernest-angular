import { Component, Input } from '@angular/core';

@Component({
  selector: 'papernest-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Input() counter!: number | null;
  @Input() increment!: number | null;
  @Input() actions!: number | null;
  @Input() color!: string | null;
}

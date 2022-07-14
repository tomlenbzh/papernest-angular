import { Component, Input } from '@angular/core';

@Component({
  selector: 'papernest-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  @Input() counter!: number | null;
  @Input() increment!: number | null;
  @Input() actions!: number | null;
  @Input() color!: string | null;
}

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BgColors } from 'src/app/utils/constants/bg-colors';

@Component({
  selector: 'papernest-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnChanges {
  @Input() counter!: number | null;
  @Input() increment!: number | null;
  @Input() actions!: number | null;
  @Input() color!: string | null;

  colorClass!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('color') && this.color) {
      this.setBackground(this.color);
    }
  }

  /**
   * Sets the background's hexadecimal code for the selected color.
   *
   * @param       { string }      color
   */
  private setBackground(color: string): void {
    switch (color) {
      case BgColors.WHITE:
        this.colorClass = '--white';
        break;

      case BgColors.RED:
        this.colorClass = '--red';
        break;

      case BgColors.GREEN:
        this.colorClass = '--green';
        break;

      default:
        break;
    }
  }
}

import { Component } from '@angular/core';
import { BaseButtonDirective } from '../../directives/base-button/base-button.directive';

@Component({
  selector: 'papernest-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent extends BaseButtonDirective {}

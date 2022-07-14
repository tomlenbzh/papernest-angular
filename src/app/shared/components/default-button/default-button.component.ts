import { Component } from '@angular/core';
import { BaseButtonDirective } from '../../directives/base-button/base-button.directive';

@Component({
  selector: 'papernest-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent extends BaseButtonDirective {}

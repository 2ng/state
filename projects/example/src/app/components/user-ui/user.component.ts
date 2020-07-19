import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserUIComponent {
  @Input() name: string;
  @Input() photo: string;

  @Output() uppercase = new EventEmitter<void>();
  @Output() lowercase = new EventEmitter<void>();
  @Output() loadPhoto = new EventEmitter<void>();
}

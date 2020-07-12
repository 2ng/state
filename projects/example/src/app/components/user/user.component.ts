import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserFacade } from './user.facade';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  name$ = this._facade.name$;
  photo$ = this._facade.photo$;
  loading$ = this._facade.loading$;

  constructor(private _facade: UserFacade) {}

  uppercase() {
    this._facade.uppercase();
  }

  lowercase() {
    this._facade.lowercase();
  }

  loadPhoto() {
    this._facade.loadPhoto();
  }
}

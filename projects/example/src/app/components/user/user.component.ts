import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserStore } from './store/user.store';
import { UserFacade } from './user.facade';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserWFacadeComponent {
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
// Для примера
export class UserWStoreComponent {
  name$ = this._store.name$;
  photo$ = this._store.photo$;
  loading$ = this._store.loading$;

  constructor(private _store: UserStore) {}

  uppercase() {
    const { UPPERCASE } = this._store;
    this._store.dispatch(UPPERCASE);
  }

  lowercase() {
    const { LOWERCASE } = this._store;
    this._store.dispatch(LOWERCASE);
  }

  loadPhoto() {
    const { LOAD_PHOTO } = this._store;
    this._store.dispatch(LOAD_PHOTO);
  }
}

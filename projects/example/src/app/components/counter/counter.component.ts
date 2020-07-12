import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { CounterFacade } from './counter.facade';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  counter$ = this._facade.counter$;

  @ViewChild('input', { static: true })
  _input: ElementRef<HTMLInputElement>;

  constructor(private _facade: CounterFacade) {}

  increment() {
    this._facade.increment();
  }

  decrement() {
    this._facade.decrement();
  }

  setValue(value: number) {
    this._facade.setValue(value);
    this._input.nativeElement.value = '';
  }
}

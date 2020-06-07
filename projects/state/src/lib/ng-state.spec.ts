import { TestBed } from '@angular/core/testing';
import {Injectable} from '@angular/core';
import {NgState} from './ng-state';
import isEqual from '@2utils/is-equal';

@Injectable()
class TestService extends NgState {
  constructor() {
    super({
      user: {
        name: 'ANDREY'
      }
    });
  }
  lowercase() {
    this.setState({
      user: {
        name: 'andrey'
      }
    });
  }
}

describe('NgState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);

    expect(service).toBeTruthy();
  });

  it('should\'nt emit equals', () => {
    const service: TestService = TestBed.get(TestService);


    let i = 0;
    service.state.changes(state => state.user).subscribe(state => {
      console.log(state);
      i++;
    });

    service.lowercase();
    service.lowercase();
    service.lowercase();
    service.lowercase();
    service.lowercase();

    // 2 так как первый init() и один lowercase()
    expect(i).toBe(2);
  });

  it('should redefined equalFn', () => {
    const service: TestService = TestBed.get(TestService);
    const newEqualFn = jasmine.createSpy('newEqualFn', () => {});

    NgState.isEqualFn = newEqualFn;

    service.state.changes().subscribe();
    service.lowercase();

    expect(newEqualFn).toHaveBeenCalled();

    NgState.isEqualFn = isEqual;
  });
});

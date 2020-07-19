import { TestBed } from '@angular/core/testing';
import {Injectable} from '@angular/core';
import {NgState} from './ng-state';

@Injectable()
class TestService extends NgState {
  state$ = this.select();

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
    service.state$.subscribe(state => i++);

    service.lowercase();
    service.lowercase();
    service.lowercase();
    service.lowercase();
    service.lowercase();

    // 2 так как первый init() и один lowercase()
    expect(i).toBe(2);
  });
});

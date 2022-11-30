import { TestBed } from '@angular/core/testing';

import { HiuiServiceService } from './hiui-service.service';

describe('HiuiServiceService', () => {
  let service: HiuiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiuiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

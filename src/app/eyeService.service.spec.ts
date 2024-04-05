/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EyeServiceService } from './eyeService.service';

describe('Service: EyeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EyeServiceService]
    });
  });

  it('should ...', inject([EyeServiceService], (service: EyeServiceService) => {
    expect(service).toBeTruthy();
  }));
});

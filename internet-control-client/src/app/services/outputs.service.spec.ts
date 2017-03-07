/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OutputsService } from './outputs.service';

describe('OutputsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutputsService]
    });
  });

  it('should ...', inject([OutputsService], (service: OutputsService) => {
    expect(service).toBeTruthy();
  }));
});

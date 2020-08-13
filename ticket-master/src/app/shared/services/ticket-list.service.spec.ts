import { TestBed } from '@angular/core/testing';

import { TicketListService } from './ticket-list.service';

describe('TicketListService', () => {
  let service: TicketListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

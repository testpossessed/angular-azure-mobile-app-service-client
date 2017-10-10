import { TestBed, inject } from '@angular/core/testing';

import { AzureMobileAppServicesClientService } from './service';

describe('Azure Mobile App Services Client Service', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                AzureMobileAppServicesClientService
            ]
        });
    });

    it('Should be able to create an instance',
        inject([AzureMobileAppServicesClientService], (service: AzureMobileAppServicesClientService) => {
            expect(service).toBeTruthy();
        }));

    it('Should implement a method to initialise the service',
        inject([AzureMobileAppServicesClientService], (service: AzureMobileAppServicesClientService) => {
            expect(typeof service.init).toBe('function');
            expect(service.init.length).toBe(1);
        }));
});

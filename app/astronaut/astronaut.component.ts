import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MissionService } from '../shared/services/mission.service';

@Component({
    selector: 'my-astronaut',
    templateUrl: 'app/astronaut/astronaut.component.html'
})
class AstronautComponent implements OnDestroy {
    @Input()
    astronaut: string;
    mission: string;
    confirmed: boolean;
    announced: boolean;
    subscription: Subscription;

    constructor(private missionService: MissionService) {
        this.mission = '<no mission announced>';
        this.confirmed = false;
        this.announced = false;

        this.subscription = this.missionService.missionAnnounced$.subscribe(
            mission => {
                this.mission = mission;
                this.announced = true;
                this.confirmed = false;
            }
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    confirm(): void {
        this.confirmed = true;
        this.missionService.confirmMission(this.astronaut);
    }
}

export { AstronautComponent }
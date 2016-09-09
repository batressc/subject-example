import { Component } from '@angular/core';

import { MissionService } from '../shared/services/mission.service';

@Component({
    selector: 'mission-control',
    templateUrl: 'app/mission-control/mission-control.component.html',
    providers: [MissionService]
})
class MissionControlComponent {
    astronauts: string[];
    history: string[];
    missions: string[];
    nextMission: number;

    constructor(private missionService: MissionService) {
        this.astronauts = ['Lovell', 'Swigert', 'Haise'];
        this.history = [];
        this.missions = ['Fly to the moon', 'Fly to mars', 'Fly to vegas'];
        this.nextMission = 0;

        this.missionService.missionconfirmed$.subscribe(
            astronaut => {
                this.history.push(`${astronaut} confirmed the mission`);
            }
        );
    }

    announce() {
        let mission = this.missions[this.nextMission++];
        this.missionService.announceMission(mission);
        this.history.push(`Mission "${mission}" announced`);
        if (this.nextMission > this.missions.length) this.nextMission = 0;
    }
}

export { MissionControlComponent }
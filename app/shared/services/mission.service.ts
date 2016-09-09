import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
class MissionService {
    private missionAnnouncedSource: Subject<string>;
    private missionConfirmedSource: Subject<string>;
    missionAnnounced$: Observable<string>;
    missionconfirmed$: Observable<string>;

    constructor() {
        this.missionAnnouncedSource = new Subject<string>();
        this.missionConfirmedSource = new Subject<string>();
        this.missionAnnounced$ = this.missionAnnouncedSource.asObservable();
        this.missionconfirmed$ = this.missionConfirmedSource.asObservable();
    }

    announceMission(mission: string): void {
        this.missionAnnouncedSource.next(mission);
    }

    confirmMission(astronaut: string): void {
        this.missionConfirmedSource.next(astronaut);
    }
}

export { MissionService }
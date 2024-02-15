import { Component } from '@angular/core';
import { FadeInOut, IntersectionStatus } from 'src/app/shared/directives/intersection-observer';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  // animations: [FadeInOut(5000, 5000, true)]
})
export class SummaryComponent {
  status: IntersectionStatus = IntersectionStatus.NotVisible
  constructor() {}
  onVisibilityChanged(status: IntersectionStatus) {
    this.status = status;
  }
}

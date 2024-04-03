/*
 * AMRIT – Accessible Medical Records via Integrated Technology
 * Integrated EHR (Electronic Health Records) Solution
 *
 * Copyright (C) "Piramal Swasthya Management and Research Institute"
 *
 * This file is part of AMRIT.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-referred-104-workarea',
  templateUrl: './referred-104-workarea.component.html',
  styleUrls: ['./referred-104-workarea.component.css'],
})
export class Referred104WorkareaComponent {
  @ViewChild('sidenav')
  sidenav: any;

  constructor() {}

  sideNavModeChange(sidenav: any) {
    const deviceHeight = window.screen.height;
    const deviceWidth = window.screen.width;
    if (deviceWidth < 700) sidenav.mode = 'over';
    else sidenav.mode = 'side';
    sidenav.toggle();
  }
}

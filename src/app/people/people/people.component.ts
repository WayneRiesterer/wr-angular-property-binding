import { Component, Input } from '@angular/core';

import { Person } from '../models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() people: Array<Person>;
}
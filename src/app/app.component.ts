import { Component, OnInit } from '@angular/core';

import { Person } from './people/models/person.model';
import data from './data/data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  // Passing Array of Objects
  people: Array<Person>;

  // Passing Single Object
  personObject: Person;
  
  // Passing Primitive Values
  name: string;
  age: number;

  ngOnInit(): void {
    // Passing Array of Objects
    this.people = data.people;

    // Passing Single Object
    const firstPerson = data.people[0];
    this.personObject = new Person(firstPerson.name, firstPerson.age);

    // Passing Primitive Values
    this.name = firstPerson.name;
    this.age = firstPerson.age;
  }
}

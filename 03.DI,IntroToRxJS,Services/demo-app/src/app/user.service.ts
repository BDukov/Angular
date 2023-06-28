import { Injectable } from '@angular/core';
import { User } from 'src/app/types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
  users: User[] = [
    {name: 'John', age: 25},
    {name: 'Smith', age: 35},
    {name: 'Mark', age: 45},
    {name: 'Sara', age: 55},
  ];

  constructor() {
    setInterval(() => {
      this.users.push({
        name: 'Demo name',
        age: 0
      });

      console.log('User has been added');
      
    }, 3000)
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value)
    };

    this.users = [...this.users, user];

    inputName.value = '';
    inputAge.value = ''; 
  }
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  userList$: Observable<any>;
  selectedUser: {};


  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit() {
    // this.userList$ = this.userService.getAllUsers();
  }

  onClickOfUser(user) {
    console.log(user);
    this.selectedUser = user;
  }
  /*
    onSearch(enteredSearch) {
      this.userList$ = this.userService.getUser(enteredSearch).pipe(
        map(itemsObject => {
          console.log(itemsObject);
          if (itemsObject['items']) {
            return itemsObject['items'];
          }
        })
      );

    } */

  onSearch(enteredName, enteredRepo) {
    this.userList$ = this.userService.getUsersForSearchedRepositries(enteredName, enteredRepo).pipe(
      map(itemsObject => {
        console.log(itemsObject);
        if (itemsObject['items']) {
          return itemsObject['items'];
        }
      })
    );

  }



}

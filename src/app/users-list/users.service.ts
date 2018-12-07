import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'https://api.github.com/users';

  constructor(private _http: HttpClient) { }

  getAllUsers() {
    return this._http.get(this.url);
  }

  getUser(searchedQuery) {
    return this._http.get(`https://api.github.com/search/users?q=${searchedQuery}`);
    /*   .pipe(
        tap(data => {
          console.log(data);
        })
      ); */
  }

  getUsersForSearchedRepositries(searchedName, searchedLanguage) {
    return this._http.get(`https://api.github.com/search/repositories?q=${searchedName}+language:${searchedLanguage}`);
  }


}





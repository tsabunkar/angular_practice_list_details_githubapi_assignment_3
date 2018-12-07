# Practice_GitHubApi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


---------------------------------------------

Search and display details of GitHub Repos
•	Display a Search Box with inline ‘Search’ icon. This will search GitHub Repo details.


•	Entering search term and on click of search icon search should happen on following details,
    o	API: https://api.github.com/search/repositories?q={search text}
    o	Note - Refer https://developer.github.com/v3/search/#search-repositories  for the API reference


•	On click of any of listed search team, display the details as below,
    o	Data to be displayed mapping from JSON response
        	Name: {full_name }
        	Avatar:{owner.avatar_url}
        	Description: { description}
        	URL: {url}
        	Score: {score}


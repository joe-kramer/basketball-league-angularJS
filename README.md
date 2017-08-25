# Basketball-league-angular

This program is for keeping track of my mens league roster changes and stats throughout the season. Data is saved in firebase and app is designed with AngularJS.

## Firebase setup

* _Create src/app/api-keys.ts_
* _Create database named Basketball league and click web app_
* _Format as such with your own information:
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };_
* _upload json from sample-players.json_

## Planning

1. Configuration/dependencies
  * You will need to have node.js downloaded.
  * Run a "bower install" and "npm install" after cloning repository
  * Run "ng serve" and go to localhost:4200

2. Specs
  * Spec 1: Need to see roster, input: roster page, output: display all players
  * Spec 2: Need to add player, input: player, output: player displayed on roster.
  * Spec 3: Need to update or delete player, input: admin/change information/delete, output: updated info/player destroyed

3. Integration
  * app.Component.ts contains all other Components
  * RosterComponent contains list of players
  * AdminComponent is where we can see the whole roster, but with update or delete options for each
  * AboutComponent is information on the team
  * PlayerDetailComponent is where we display each players information to be rendered in RosterComponent

4. UX/UI
  * Built with bootstrap
  * Built with AngularJS

5. Polish
  * Make README awesome

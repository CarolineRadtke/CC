# Day calendar application

##Coding Challenge Ruum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

In Codingschallenge/Calendar
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Data Server

This application is using the **json-server** to simmulate the Datatransfer through an API.
To be able to send request and make changes through the console the server needs to be startet by:
In Codingchallenge/server
Run `json-server --watch db.json`
The db.json file holds the current dataset as a json.

## Testing

The data can be altered by changing the db.json file directly or using the Dev Tools Console by calling the function with the array of events.
`layOutDay([events])`
Events consist of:
`{start: number, end:number, title?: string, location?: string}`
For example try:
`layOutDay([ {start: 30, end: 150, title: "Brunch"}, {start: 540, end: 600, title: "Lunch"}, {start: 560, end: 620, title: "Snack"}, {start: 610, end: 670, title: "Dinner", location:"Restaurant"} ])`

## Please note:

Valid input consists in this case of the correct representation of an event and is ordered according to the start time the events are occuring.

Also, the collision detection still does not work for all test cases e.g when 3 or more Events would overlay. With more time I would try to find another solution to get the position of each event. 

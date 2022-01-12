# Ticket-System
A highly configurable and usable Ticket System for every Kind of Support 

## Description
This should be an modular Ticket System for me and all Kinds of Product's i've build / i will build
To Manage / Fix and Cartegorize all kinds of Bugs or whatever with an Integration for all my products
Especially the Ez-Uploader, my Personal Website, the Hosting-System, the github-information-api
Too have a Dedicated place were all the Bugs and or Ideas Belong to

## Think - User Tracking
Think of a way to implement this also in the hoster system without a new account! 
To have a DEDICATED place where all the tickets are stored
* The Idea is to use this as a Rest API and pass a UUID to a ticket so it can determent the user
So the tickets can also displayed on the HostingSystem UI for example

## MVP
* Standalone Software
    * Login
    * Ticket-System
    * Realtime functionality
* Standalone UI
    * Live Chat in Ticket
    * View / Create Ticket
    * Login

## Stretch
* Custom Vue Components to integrate in other projects
* Any Simplified realtime abillity

## Tech Stack
* Front-end: Vue.js + Vuex + Vue-Router + Bootstrap
* Other: MySql + Chart.JS + Socket.io
* Back-end: Node.js + Express

## Tech Stack substantiation

* Vue: As it is my favorite Framework and im most familiar with it besides to React Angular or Svelte
* Vuex: It is an Official State Managment Plugin for Vue similar to Redux in React
* Vue-Router: Same as for Vuex Official Routing System
* Bootstrap: Its an nice, easy and memorizable Style Library

* MySql: Its my favorite SQL Language and im familiar with my MySqlAPI on npm
* Chart.JS: To later maybe Display Charts in the admin panel
* Socket.io: To add an Real Time Chat system for clearer communication

* Node.js: Yeah its js and i like js
* Express: Im the most familiar with + i've written several little helpers for this Lib

## Todo
* [ ] Model the Database
* [x] Create Express App & Setup a basic app
* [x] Bring in mysql
* [ ] Think about the routing
* [ ] Think about if everything should be realtime
    * [ ] No fetch's etc.
* [ ] Setup the Tables
* [ ] Setup the routes

## ERM - Entity Relation Model
![This is the current ERM](https://images.jodu555.de/001cd38c-c3fd-47ac-b833-a5e178499d49.png "This is the current ERM")

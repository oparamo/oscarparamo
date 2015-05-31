# oscarparamo

[oscarparamo](http://www.oscarparamo.com) is my personal website and development playground. This project will be an Ember.js web application that will host personal and professional information about me. Eventually, any other side projects I work on will be linked to or hosted on my website. The live version of this project will be hosted by my Raspberry Pi [here](http://www.oscarparamo.com).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Goals

- Finish my personal website
- Create an environment where I can try new things related to programming
- Host my website on my raspberry pi
- Set up 'push to deploy' with Git
- Get more experince using Git
- Learn more about Node.js and Ember.js
- Use test driven development
- Implement tracking and analytics (statsd and Google)
- Implement the MVC model

## TODO

- [x] Install Raspbian on rpi
- [x] Set up SSH on rpi
- [x] Initialize git repo locally and on GitHub
- [x] Add basic project structure
- [x] Set up git repo and git remote on rpi
- [x] Automatially start/stop ember server when rpi boots/shutdown
- [x] Configure git hook on rpi to enable "push to deploy"
- [x] Point domain to the rpi
    - [x] Configure dyndns with my domain
    - [x] Test ssh from internet
    - [x] Test push to deploy
- [ ] Finish personal website
    - [ ] Add about website (home)
    - [ ] Add about me
    - [ ] Add education
    - [ ] Add employment
    - [ ] Add experience/skills
    - [ ] Add hit and miss (+ -)
    - [ ] Add hobbies
    - [ ] Add contact me
- [ ] Publish a tutorial for rpi setup
- [ ] Upgrade to Raspberry Pi 2

© 2015 Oscar Paramo

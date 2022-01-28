# Tech Education

A set of tools maintained by [The SetLife Network](http://setlife.network) to make development simpler, including a custom boilerplate for creating new React+Node apps.

Libaries used: Express, React, Redux, React Router, Webpack

## Setup

1. Clone the repo `git clone https://github.com/setlife-network/tech-education`

2. Move into the directory `cd tech-education`

3. Install dependencies `yarn install`

## Directory Layout

Get familiar with the **setlife** folder structure

```
|-- /api/                           # Backend application source code
    |-- /handlers/                  # Handle 3rd party APIs here with request.js
    |-- /models/                    # Database model definitions
    |-- /modules/                   # Holds files with modular functionality
    |-- /types/                     # GraphQL type definitions
    |-- schema.js                   # Root file serving as an index of API endpoints
|-- /config/                        # Configuration files (database options, keys, constants, etc) 
|-- /public/                        # Holds all compiled and static files such as fonts and images
	|-- /index.html/				# The root static HTML file that will serve the web app in production
|-- /src/							# Frontend application source code
	|-- /components/			    # React components
	|-- /constants/					# Any constant variable used throughout the app
	|-- /pages/					    # Higher-level route-mapped containers for arranging React Components
	|-- /scripts/					# Functions for API calls, data formatters, validators, etc
	|-- /styles/					# SASS stylesheets or styling-related JS files go here
|-- /server.js/                     # The main JS file that builds the Express server and runs the backend application source code
```

# Usage

## Development (Frontend)

React+Redux front-end development files are served from webpack-dev-server, configured with webpack.config.js, and hot-reloaded automatically on every save.

to start webpack-dev-server run:

	npm run dev

this command will bundle up files for webpack-dev-sever and host them on: 

http://localhost:3000

## Development (Backend)

to start the Node+Express application sourced in the `/api` folder run:

    node server

**_Hot-reloading is only enabled for files in the /web folder. Changes to any files in the /api folder will usually require a server restart (press `CTRL + c` in the terminal to stop the server)_**

If you have `nodemon` installed you can run:

    nodemon server

to enable hot-reloading of backend files

The server should be running at:

http://localhost:4000

### Testing in Development

Jest is used as a unit testing framework and developers should run `npm run test` before making any pull requests to ensure all tests pass.

When creating unit tests, be aware that Redux-connected components that are exported with `export default connect(...` should not be imported directly as such in the respective `*.test.js` file. Instead, ensure there is an export on the class declaration and import the component with `import { Component } from 'path/to/Component'` instead of `import Component from 'path/to/Component'`

If you are making UI changes, it should be very common for some unit tests to fail at `should render correctly` because the relevant snapshots would need updating. You should carefully target the component whos snapshot you wish to update with `npm run test -- -u --testNamePattern='ComponentToUpdate'` instead of simply updating all snapshot which may cause some UI bugs to be overlooked.

## Production	

In development, the bundle is created behind the scenes and is not production ready. The production-ready bundle is build with webpack using `react-scripts`. To create a production-ready bundle run: 

	npm run build

this command will bundle up files and export them to build folder:

	~/build

which is ignored and does not need to be committed to the repo

## Testing your production bundle 

Testing the production bundle can be done by running an express server from server.js in the root directory. To start the server run:

	node server
	
This script will serve your app from the production bundle in the /build folder. To access the app go to 

	http://localhost:4000

**_Make sure to terminate the server when finished testing_**

to terminate the express server press `CTRL + c`:

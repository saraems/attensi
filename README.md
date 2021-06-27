SOME DOCUMENTATION 
error postcss@8.2.6: The engine "node" is incompatible with this module. Expected version "^10 || ^12 || >=14". Got "13.7.0"

## Instructions for installing and starting the application

**Required:** Node.js expected version "^10 || ^12 || >=14"<br />
In main directory run: **`yarn`** or **`npm i`** to install all dependecies. 

After instalation to run the app in the development mode run: **`yarn start`** or **`npm start`**<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

For more script, how to for e.g. make deployment to production:[documentation](https://reactjs.org/).

## Frameworks and libraries

To create this Single Page Application(SPA) was used React freamwork with TypeScript. React, besause it's one of the most popular frameworks for frond-end development and also has great, hudge community which provides many solution and support while error handling and bugs reporting what made React a stable tool over years. In other hand it's personall choice of developer as React reminds more functional programing than Angular, which is closer to object oriented programing(OOP) paradigma.

TypeScript is used to have control over types, decrease number of errors and improve redability of the code. 
All used dependencies for this project can be found in `package.json` file. 

- **Redux** <br />
Redux is a gloabal state container for the aplication, even that this project is SPA and app state is not so complicated it's undisputed advantage in improving code redability while all state doesn't come from uber parent component and doesn't have to be passed to all chldren, grandchildren and back to parent which might introduce uneccesary complications in handling smoot rendering. 

- **immer** <br />
Immer is a developers tool used to prevent mutating application's global state stored in Redux while introducing action which are meant to change application's state. Immutability is a requirement of Redux to might use state's history. Immer is an easy way to produce new application's state. 

- **martin_hotell/rex-tils** <br />
Rex-tils is a libraary used for improving Redux types safety to be able to use Redux within TypeScript with it's fulll types-check potential. 

- **Material-UI (icons, core)** <br />
Material-UI provides simple, redy to use components as Tables, Dialogs, Buttons etc. which doesn't have to be created from scratch. Using it speeds up development while custom design is not a crucial part of the project, which is a case in this project. 

- **Styled-components** <br />
Styled-components tool which allows to create css in .js, .ts and tsx files as JS variables. A comfortble library to keep application modular and decrease number of imports eliminating .css and .scss files usage. 

- **lodash** <br />
Lodash provides many utility functions for common programming tasks. It makes coding in JavaScript easier and cleaner. Instead of writing common functions, again and again, the task can be accomplished with a single line of code. Within this project it contributed to filtering and sorting products list. 

 <br /> Rest of the application's dependencies are builded-in and provided by default in react-app (for e.g testing-libraries). 

## Code description

The main app file is placed in `/src/index.tsx`. The file renders core, parent component  enwrapped in Redux store provider and StylesProvider. Redux provider allows it's childrem to use global state whereas StylesProvider allows overwritting Material-UI components style with custom css.

Global application's store is kept in a separate folder under `/src/store` path. This architecture decision is made to allow applications growth while adding new modules next to the page. New module's reducers can be easily combined and added to the global store. 
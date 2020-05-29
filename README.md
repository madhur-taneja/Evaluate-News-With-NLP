# Evaluate a News Article with NLP

A web tool/interface that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites by interacting with the NLP system of an exciting new api called [Aylien](https://aylien.com/)

Open and view the Project using the `.zip` file provided or at my [Github Repository](https://github.com/madhur-taneja/Evaluate-News-With-NLP)

## Table of Contents
- [Project Summary](#project-summary)
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Development](#development)
    - [Setting up the API](#setting-up-the-api)
      - [Step 1: Signup for an API key](#step-1-signup-for-an-api-key)
      - [Step 2: Install the SDK](#step-2-install-the-sdk)
      - [Step 3: Require the SDK package](#step-3-require-the-sdk-package)
      - [Step 4: Environment Variables](#step-4-environment-variables)
      - [Step 5: Using the API](#step-5-using-the-api)
    - [After the API Setup](#after-the-api-setup)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [References](#references)

## Project Summary

The goal of this project is to get a taste of the environments and tools that are most likely to be used in a front end role. The focus is to understand the role every tool and technology is playing in the overall architecture, but one shouldn’t feel the need to memorize the particular commands, config setups, or structure that we create here. Every company, and even every project, will have its own custom setup, but understanding the moving pieces will help to get the gist of even far more complicated projects than this one.

Some of the concepts that are implemented:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, this project introduces the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

One could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. It is used in this project to determine various attributes of an article or blog post.

## Getting started

The starter project can be downloaded from [here](https://github.com/udacity/fend/tree/refresh-2019/projects/evaluate-news-nlp)

The project will be evaluated by a Udacity code reviewer according to the Evaluate News with NLP project [rubric](https://review.udacity.com/#!/rubrics/2668/view)

### Tools Required:

You would require the following tools to develop and run the project:

* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* A text-editor of your choice. 

### Installation

* Start by setting up the project environment. `cd` into the project's root folder and run the following command to install packages mentioned in `package.json`:

  ```
  npm install
  ```

## Development

### Setting up the API

The Aylien API has a node module that needs to be installed to run certain commands through, which will simplify the requests made from the node/express backend.

#### Step 1: Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

#### Step 2: Install the SDK
Next you'll need to get the SDK. SDK stands for Software Development Kit, and SDKs are usually a program that brings together various tools to help you work with a specific technology. SDKs will be available for all the major languages and platforms, for instance the Aylien SDK brings together a bunch of tools and functions that will make it possible to interface with their API from our server and is available for Node, Python, PHP, Go, Ruby and many others. We are going to use the Node one, the page is available [here](https://docs.aylien.com/textapi/sdks/#sdks). You get 1000 free requests per day.

#### Step 3: Require the SDK package
Install the SDK in your project and then we'll be ready to set up your server/index.js file.

The server index.js file must have these things:

- [ ] Require the Aylien npm package
  ```
  var aylien = require("aylien_textapi");
  ```

#### Step 4: Environment Variables
Next we need to declare our API keys, which will look something like this:
```
// set aylien API credentias
var textapi = new aylien({
  application_id: "your-api-id",
  application_key: "your-key"
});
```

...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
  ```
  API_ID=**************************
  API_KEY=**************************
  ```
- [ ] Add this code to the very top of your server/index.js file:
  ```
  const dotenv = require('dotenv');
  dotenv.config();
  ```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
  ```
  console.log(`Your API key is ${process.env.API_KEY}`);
  ```
...Not that you would want to do that. This means that our updated API credential settings will look like this:
  ```javascript
  // set aylien API credentials
  // NOTICE that textapi is the name I used, but it is arbitrary. 
  // You could call it aylienapi, nlp, or anything else, 
  //   just make sure to make that change universally!
  var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });
  ```

#### Step 5: Using the API

We're ready to go! The API has a lot of different endpoints you can take a look at [here](https://docs.aylien.com/textapi/endpoints/#api-endpoints). And you can see how using the SDK simplifies the requests we need to make. 

I won't provide further examples here, as it's up to you to create the various requests and make sure your server is set up appropriately.

### After the API Setup

Once you are hooked up to the Aylien API, you are most of the way there! Along with making sure you are following all the requirements in the project rubric in the classroom, here are a few other steps to make sure you take.

- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements.
- Go back to the web pack config and add the setup for service workers. 
- Test that the site is now available even when you stop your local server

For details now how these functionalities have been implemented, refer the source code.

## Running the App

1. Open terminal in the root directory
2. Generate the `dist` folder using `npm run build-prod` command on the terminal
4. Aylien API requires you to sign up and get credentials to use their endpoints. After signing up, you will get an `API-KEY` and `API-ID`. Create an `.env` file in the root directory that will contain those two like following: 
    > API_ID=***  
      API_KEY=***

    Just replace the `***` with your credentials
5. To start the express server, run `npm run start` command in the terminal. The server will start on `http://localhost:3000/` in your browser
6. To build the app in development mode, run `npm run build-dev`. command in the terminal. The server will start on `http://localhost:8080/` in your browser which is the default port for webpack dev server
7. The production version can be directly run by opening `dist/index.html` file
8. Use `npm run test` command to test the project with jest

## Deployment

A great step to take with the finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.

## References

* Webpack [Docs](https://webpack.js.org/concepts/)
* Alyien API Endpoint [Docs](https://api.aylien.com/api/v1)
* Jest [Docs](https://jestjs.io/docs/en/getting-started)
* Jest [Tutorial](https://www.valentinog.com/blog/jest/)


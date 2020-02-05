# Evaluate a News Article with NLP

## Table of Contents
* [Project Summary](#project-summary)
* [What You Will Build](#what-you-will-build)
* [Getting Started](#getting-started)

## Project Summary
* The goal of this project is to give you a taste of the environment and tools you will most likely come across in a front end role. Your focus should be to understand the role every tool and technology is playing in the overall architecture, but you shouldn’t feel the need to memorize the particular commands, config setups, or structure that we create here. Every company - and even every project - will have its own custom setup, but if you understand the moving pieces you will be able to get the gist of even far more complicated projects than this one.


## What You Will Build
* We will be building web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting new api called [Aylien](https://aylien.com/), we can build a simple web interface to interact with their NLP system.

## Getting Started

1. Download the `.zip` or clone the repository.
2. Install all dependencies using `npm install` command on the terminal.
3. Generate the `dist` folder using `npm run build-prod` command on the terminal
4. Aylien API requires you to sign up and get credentials to use their endpoints. After signing up, you will get an `API-KEY` and `API-ID`. Create an `.env` file that contain those two like this: 
    > API_ID=***  
    API_KEY=***

    Just replace the "***" with your credentials.
5. To start the express server, run `npm run start` command in the terminal. The server will start on http://localhost:3000/ in your browser.
6. To build the app in development mode, run `npm run build-dev`. command in the terminal. The server will start on http://localhost:8080/ in your browser which is the default port for webpack dev server.
7. Use `npm run test` command to test the project with jest.
# Table Top RPG Random Quest Prompt Generator

This app uses a database of prompts to randomly generate a quest for you to draw inspiration from, and to flesh out.

It's merely an aid to DMs who are struggling with a bit of creation block - so here's a D6 inspiration to get you going again.

## Prerequisites

Node Version 18.12.1
In theory you don't need internet acces, if you are running the JSON server locally.

## Installation

Clone this repo and then run:

`npm install` to install all necessary modules.

In the project directory, you should run:
`json-server --watch src/db/prompts.json`

Once JSON Server is up and running, you can run

`npm start` to get the react app to run on a port other than 3000.

## How to use

Just click on GENERATE ME A QUEST! to generate a randomised quest.

If you go to the PROMPTS page you can see a bunch of input fields to add more prompts to the database.

My advice would be to stick very closely to the given examples, so the text generated still makes sense. After all, its a hardcoded paragraph creator - it's not going to automatically fix any grammatical mistakes!

### Inspiration

This project was inspired by `whothefuckismydndcharacter.com` created by Ryan J. Grant @ryanjgrant.

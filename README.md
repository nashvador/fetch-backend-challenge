# Fetch Rewards Backend Takehome - Nash Vador Submission

This is my solution for the Fetch Rewards Backend Takehome Project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have docker running on your system and ensure that Docker is running (daemon needs to be connected to the internet).

### Installing

In your terminal type these steps in to get the code running:

```
git clone https://github.com/nashvador/fetch-backend-challenge.git
cd fetch-backend-challenge
docker-compose up
```

## Technologies Chosen

- Runtime: NodeJS
- Containerization: Docker
- Testing
  - Unit: Jest
- CI/CD: Github Actions
- Deployment: Heroku
- Versioning: Github Tag Action

## Running Tests

Ensure that you have a version of node that is at 16 or past it. If you do not go to this [website](https://nodejs.org/en/) and click on the version recommended for most users. Also make sure that you have an IDE like Visual Studio Code so that you can edit if you want to!

Before running your tests make sure that you have all the prerequisites and have ran `npm install` prior to everything.

### Unit tests

The unit testing is done with Jest. To check these, type in `npm run test`.

### Linter

To follow best practices, I used eslint to lint my code. If you are using a windows computer `npm run lint` should start up the linter. If you are not, change the scripts in the package.json to `"lint": "eslint './src/**/*.{ts,tsx}'"`. Then save and start with `npm run lint` in your terminal.

## Deployment

To automate the deployments to Heroku, I used Github Actions. All the steps that test and lint are prerequisites to deployment and after deployment I add version tags to each using Github Tag Actions. The live site can be viewed [here](https://fetch-backend-challenge-fe9c86fa6195.herokuapp.com/).

## Thank You!

Thank you for viewing my project.

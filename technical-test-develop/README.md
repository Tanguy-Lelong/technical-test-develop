# Technical Test

This little test aims to perceive how you perform technically in an environment like the studio we are developping at epicnpoc

## Presentation

This is a simple quiz fullstack application that list quizzes, delete and add some.

The app is split in 2 parts :

- ### frontend

Role : Ask the backend Rest API for quiz datas

Technos : React, typescript, react query

- ### backend

Role : Store and change quiz datas + Answers to the frontend requests through the API

Technos : nodejs, typescript, express, mongodb & mongoose

Reads locally a quizzes.json file on start to init the database.

## Requirements

Here is the list of softwares needed and recommended to develop the project :

**Needed :**

- node (v16.X) & npm (v8.X) : https://nodejs.org/dist/latest-v16.x/

```
curl -s https://deb.nodesource.com/setup_16.x | sudo bash
sudo apt-get install -y nodejs
```

If you have an error related to a missing public key, try this command :
`curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -`

Then run `node -v` in a bash. You should see your version appear.

- mongodb

```
apt update
apt install dirmngr gnupg apt-transport-https ca-certificates software-properties-common
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
apt-get update
apt-get install -y mongodb-org
```

On Ubuntu 22.04:

- apt-key is deprecated
- libssl1.1 missing: MongoDb has no official build for ubuntu 22.04 at the moment. Ubuntu 22.04 has upgraded libssl to 3 and does not propose libssl1.1

```
sudo apt update
sudo apt install wget curl gnupg2 software-properties-common apt-transport-https ca-certificates lsb-release
curl -fsSL https://www.mongodb.org/static/pgp/server-5.0.asc|sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/mongodb.gpg
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt update
wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb
sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb
sudo apt install mongodb-org
```

**Recommended :**

- Visual studio code : https://code.visualstudio.com/

## Getting started

1. Install dependencies

in 1rst terminal

```
cd frontend
npm i
```

in 2nd terminal

```
cd backend
npm i
```

3. Start each project

in each terminals :

```
npm run start:dev
```

4. Done, you should see a list of quiz appear with a delete button for each one

5. (Optional) Initialize a repository with this project in a versionning tool like git or gitlab

## Subject

1. In frontend, create a Quiz component that will display all the questions + answers of a quiz.

2. Correct answers are displayed differently from the wrong ones, change the opacity or the color (for example) to differentiate them

3. Enhance the app to display multiple quiz :

- in frontend : QuizList component should be able to display multiple quiz
- in backend : Fix the backend to import at start of the database all the quizzes from the file quizzes.json

4. Continue to develop the feature where the button "add" in the frontend can add an dummy quiz (static text and 0 questions) to the quiz list

5. Add a save button in frontend that tells the backend to export the new database content to the quizzes.json file

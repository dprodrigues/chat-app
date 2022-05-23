# Chat App

## How to run the app:

### Install the dependencies

```bash
yarn
```

### Run the server

```bash
cd packages/server && node .
```

### Run the app

```bash
cd packages/app && yarn start
```

## About the app

Real-time chat interface where multiple users can interact with each other by sending messages. As a MVP, the app has a simple UI and a simple backend.

## User Stories

- [x] User is prompted to enter a username when he visits the chat app. The username will be stored in the application
- [x] User can see an `input field` where he can type a new message
- [x] By pressing the `enter` key or by clicking on the `send` button the text will be displayed in the `chat box` alongside his username (e.g. `John Doe: Hello World!`)

## Bonus features

- [x] The messages will be visible to all the Users that are in the chat app (using WebSockets)
- [ ] When a new User joins the chat, a message is displayed to all the existing Users
- [ ] Messages are saved in a database
- [ ] User can send images, videos and links which will be displayed properly
- [ ] User can select and send an emoji
- [ ] Users can chat in private
- [ ] Users can join `channels` on specific topics

## Project from:

https://github.com/florinpop17/app-ideas

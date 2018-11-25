# BirdPitch

Project built in LauzHack2018 by [Carlota Catot](https://github.com/carlotacb), [Andreu Gallofre](https://github.com/atsuky) and [Victor Sánchez](https://github.com/sanchyy)

## Project description

### Inspiration

The day before LauzHack we were eating a fondue when we were talking about a Spanish reality show (called OT) witch is a singing contest, where we choose the Eurovision participant for Spain, and we think about making a game about songs. Then we see the Logitech challenge and we decided to make the game using their microphone.

### What it does?

Our project is a singing game where you have to reach the map by singing the song, at the start of the game you can choose your gender so you can have your Pitch level correctly configured, ones you have select the prefered option, the game will start, and you only need a microphone, start singing and have fun! :)

### How we built it

For built the project we use different technologies, for the backend we use node.js with express and for the frontend we use phaser for developing the game, also we make scripts in node.js for the voice recognition and we use phyton for build of the map.

### Accomplishments that we're proud of

We are very proud about our project, at the start we didn't know how to develop a game and we think about doing a lot of things, but during the hackaton we realise that we were not able to do everything and we focus ourselves in an MVP witch was having the bird moving by sounds, integrate the song and the lyrics and having differents input parameters depending on your natural voice register.

### What we learned

We learned a lot of things in this hack because we want to challenge ourselves, we learnt about how to use Phaser, and also to do voice recognition with node.js, this took us a lot of time because we found it really difficult.


### What's next for BirdPitch

For BirdPitch we talk about having a speech-to-text IBM API so you can have also putuation about how well (or bad) you have sung the song, because if we provide the letter you should sing all the words correct!!

Also a next step for BirdPitch may be have different skins (more birds!) and have more songs.

## Requirements

To launch the game you only need to intall node and npm in your computer.

## How to run

To run the game via NPM follow the next steps:

1. Install all the dependencies:

```bash
    npm install
```

2. Run the project:

```bash
    nodemon index
```
The project will be launched in localhost:8080

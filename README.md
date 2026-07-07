# Pit-Stop-Queue

A Terminal application for the race team at the Pit Wall that helps the race engineer know which car is next in line to enter the Pit Stop and also allows you to send radio messages to the next driver entering and also search for a car by its ID.

## File structure

    |--/data
    |  |--data.json
    |
    |--raceData.js
    |--raceService.js
    |--main.js

## System flow

    Launching the app
    *
    Receiving a welcome message
    *
    Loading data
    *
    Displaying a PIT STOP QUEUE
    *
    Sending a radio message to one of the drivers
    *
    Performing a vehicle search
    *
    End

## Running example

    ========== PIT STOP QUEUE ==========

    Race: [Race name]
    Lap: 0 / 0
    Total cars in race: 0
    Pit stop completed: 0

    Cars waiting for pit stop:

    - Car #** | Driver: [Driver name]
    - Car #** | Driver: [Driver name]

    Next car to enter the pit:
    >> Car #** | Driver: [Driver name]
    =====================================

    Radio message and Search for a car by number...

## How to run

`node main.js`

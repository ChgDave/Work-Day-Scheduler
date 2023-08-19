# 05 Third-Party APIs: Work Day Scheduler

## Description

This project is week five challenge of the NW full-stack coding bootcamp. We are required to build a simple work day calendar application that allows allows a user to save events for each hour of a typical working day (9am&ndash;5pm) by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

[Day.js](https://day.js.org/en/) library is used to work with date and time.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

## Usage

```
- When first open the web page, you are shown with a work calendar for today from 9am to 5pm
- Under the header, the date of the day should be displayed
- If the hour is past the current hour, then the timeblock is displayed in grey
- If the hour is the same as the current hour, then the timeblock is displayed in red
- If the hour is in the future of the current hour, then the timeblock is displayed in green
- Each timeblock has a text area where you can type in the event that you need to do in the Calendar.
- Each timeblock has a save button where you can save your shceduled events in local storage that will persist.

## Github Repo Link

The link for the github repository for this project is:
https://github.com/ChgDave/Work-Day-Scheduler

## URL Deployment Link

The link for the deployed website for this project is:
https://chgdave.github.io/Work-Day-Scheduler/

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
```

## Career Foundry - Meet Application

The Meet application will be used for users to find local events in their location using the Google API. The application will be built using React, and testing to use the TDD Method

## Feature 2: Show and Hide Event Details

-- As a user, I should be able to to display and collapse event details so I can retrieve more, or less data depending on what I am trying to retrieve

- Scenario 1 : Collapsed by Default
    - Given a user is at the homepage
    - If nothing is selected
    - Then the details will be collapsed

- Scenario 2 : Expanding details
    - Given a user would like more details about an event
    - When the user clicks on an event they are interested in
    - Then the details for that event will expand

- Scenario 3 : Collapse the details
    - Given a user has verified the details they need, and want to collapse
    - When the user clicks on expanded details
    - Then the details will collapse again

## Feature 3: Specify number of Events

-- As a user, I should be able to choose the number of events that are seen on the page

- Scenario 1 : No number is specified
    - Given a user has not selected a set number
    - When the user visits the homepage
    - Then a default number of 15 events are displayed

- Scenario 2 : User has specified event count preference
    - Given the user has chosen an event total number count
    - When the user visits the page
    - Then the selected number of events will be displayed

## Feature 4 : Use app when offline

-- As a user, I should be able to access events even when offline

- Scenario 1 : Show cached data when offline
    - Given the user is not connected to a network
    - When the user logs into the site
    - Then the information cached will be accessible and viewable

- Scenario 2 : Show error if the user tried to change location
    - Given the user has no network connection
    - When the user changes their current location
    - Then an error is displayed

## Feature 5 : Data Visualization

-- As a user, I should be able to see visualization of events in my city

- Scenario 1 : Show visualization with selected number of events in my city
    - Given the user is on the main page
    - When a user wants to see upcoming events
    - Then the user will see a visualization with upcoming events
# Countdown Timer

A simple Countdown Timer web application that allows users to set a target date and time. Once the target date is reached, the timer will display a message and play an alert sound. Users can stop the alarm and reset the countdown at any time.

## Features

- Set a target date and time using an input field.
- Display the remaining time (days, hours, minutes, and seconds).
- Play an alert sound when the countdown ends.
- Stop and reset the countdown with a button.

## Files Overview

- **index.html**: The main HTML file containing the structure of the countdown timer.
- **css/styles.css**: The CSS file for styling the countdown timer and the page layout.
- **js/script.js**: The JavaScript file that implements the countdown logic, sound alert, and reset functionality.

## How to Use

1. **Set the Target Date:**
   - Use the "Set Target Date and Time" input field to choose the desired date and time for the countdown.
   
2. **Start the Countdown:**
   - Click the "Start Countdown" button to begin the countdown. The timer will update every second to show the remaining time.

3. **End of Countdown:**
   - Once the countdown reaches zero, the message "The time is up!" will be displayed.
   - An alert sound will play (you can stop it using the "Stop & Reset Countdown" button).
   
4. **Reset the Countdown:**
   - Click the "Stop & Reset Countdown" button to reset the countdown and stop the sound.

## Files Description

### `index.html`

The `index.html` file contains the following elements:
- An input field to set the target date and time.
- A button to start the countdown.
- A timer display showing the remaining time (days, hours, minutes, and seconds).
- A message display that shows when the countdown ends.
- A stop button that resets the countdown and stops the alarm.

### `css/styles.css`

The `styles.css` file contains the following styling:
- General reset for margin, padding, and box-sizing.
- Flexbox layout to center the content.
- Styling for the countdown timer, buttons, and messages.
- Responsive design for smaller screen sizes.

### `js/script.js`

The `script.js` file handles the countdown functionality:
- It calculates the remaining time by comparing the target date with the current time.
- It updates the display every second.
- When the countdown finishes, it shows the end message and plays an alert sound.
- It allows the user to stop the alarm and reset the countdown.

## How to Run

1. Download the project files to your local machine.
2. Open the `index.html` file in your web browser to view and interact with the countdown timer.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling and layout of the page.
- **JavaScript**: Functionality for countdown timer logic, audio alert, and reset functionality.

## Credits

- The sound file used for the alert is an MP3 file (`alert_siren.mp3`) which is played when the countdown reaches zero.

## License

This project is open-source and available under the MIT License.

## Contributing

Feel free to fork this repository, make changes, and create a pull request! Contributions are welcome. If you'd like to contribute, please follow the steps below:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new pull request.

## Connect with Me

You can check out more of my projects and contact me on my [GitHub Profile](https://github.com/dishant4163).


let countdown; // This will hold the setInterval ID
let sound; // This will hold the audio object

document.getElementById('start-btn').addEventListener('click', function () {
    const targetDate = document.getElementById('target-date').value;

    if (targetDate) {
        const countDownDate = new Date(targetDate).getTime();

        // Update the countdown every 1 second
        countdown = setInterval(function () {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the results
            document.getElementById('days').textContent = `Days: ${days}`;
            document.getElementById('hours').textContent = `Hours: ${hours}`;
            document.getElementById('minutes').textContent = `Minutes: ${minutes}`;
            document.getElementById('seconds').textContent = `Seconds: ${seconds}`;

            // If the countdown is over, display a message and play a sound
            if (distance < 0) {
                clearInterval(countdown);
                document.getElementById('timer').style.display = 'none';
                document.getElementById('message').style.display = 'block';

                // Play the sound when the timer reaches zero
                sound = new Audio('sounds/alert_siren.mp3');
                sound.play();

                // Show the Stop button
                document.getElementById('stop-btn').style.display = 'inline-block';
            }
        }, 1000);
    } else {
        alert('Please select a target date and time.');
    }
});

// Stop the alarm and reset the countdown when the Stop button is clicked
document.getElementById('stop-btn').addEventListener('click', function () {
    if (sound) {
        sound.pause();  // Stop the sound
        sound.currentTime = 0;  // Reset sound to the beginning
    }

    // Hide the Stop button
    document.getElementById('stop-btn').style.display = 'none';

    // Reset the countdown display
    document.getElementById('timer').style.display = 'block';
    document.getElementById('message').style.display = 'none';
    document.getElementById('days').textContent = 'Days: 0';
    document.getElementById('hours').textContent = 'Hours: 0';
    document.getElementById('minutes').textContent = 'Minutes: 0';
    document.getElementById('seconds').textContent = 'Seconds: 0';

    // Reset the input field
    document.getElementById('target-date').value = '';
});

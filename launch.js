const axios = require('axios');
const readline = require('readline');

// Function to fetch the next SpaceX launch data
async function getNextLaunch() {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/launches/next');
    return response.data;
  } catch (error) {
    console.error('Error fetching launch data:', error);
    process.exit(1);
  }
}

// ASCII representation of the rocket
const rocket = [
  "   /\\",
  "  /  \\",
  "  |  |",
  "  |  |",
  " /____\\",
  "   ||",
  "   ||",
  "   ||"
];

// Function to animate the rocket launch continuously
function animateRocket(rocket, steps, delay) {
  let position = steps;

  setInterval(() => {
    // Move cursor to the line after the launch info
    readline.cursorTo(process.stdout, 0, 3);
    readline.clearScreenDown(process.stdout);

    // Ensure position is not negative for repeat
    let emptyLines = '\n'.repeat(Math.max(position, 0));
    process.stdout.write(emptyLines);

    // Print the rocket
    rocket.forEach(line => {
      console.log(line);
    });

    position--;

    // Reset position to loop the animation
    if (position < -rocket.length) {
      position = steps;
    }
  }, delay);
}

// Main function to run the application
async function main() {
  const launch = await getNextLaunch();

  const name = launch.name;
  const date_unix = launch.date_unix;
  const date = new Date(date_unix * 1000);

  // Clear the console and display the launch info
  console.clear();
  console.log(`Next SpaceX Launch: ${name}`);
  console.log(`Launch Date: ${date.toUTCString()}`);
  console.log(''); // Add an empty line before the animation

  // Start the continuous animation
  animateRocket(rocket, 20, 100);
}

main();

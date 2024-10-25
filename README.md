# SpaceX Launch Tracker 🚀

A Node.js command-line application that displays the next SpaceX launch information with an ASCII rocket animation.

## Features

- Fetches real-time data for the next SpaceX launch using the SpaceX API
- Displays launch name and date in UTC
- Shows a fun ASCII rocket animation in the terminal
- Continuously updates the animation until the program is terminated

## Prerequisites

Before running this application, make sure you have:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/spacex-rocket-launch-node.git
cd spacex-rocket-launch-node
```

2. Install the dependencies:
```bash
npm install
```

## Usage

To start the application, run:
```bash
node launch.js
```

The application will:
1. Clear your terminal
2. Display information about the next SpaceX launch
3. Show an animated ASCII rocket

To stop the application, press `Ctrl + C`.

## Sample Output

```
Next SpaceX Launch: [Mission Name]
Launch Date: [UTC Launch Date/Time]

   /\
  /  \
  |  |
  |  |
 /____\
   ||
   ||
   ||
```

## Dependencies

- `axios`: For making HTTP requests to the SpaceX API
- `readline`: Built-in Node.js module for terminal manipulation

## API Reference

This project uses the [SpaceX-API](https://github.com/r-spacex/SpaceX-API) v4 endpoint:
- `/launches/next` - Retrieves information about the next scheduled launch

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Acknowledgments

- SpaceX for providing the open API
- The SpaceX-API team for maintaining the API

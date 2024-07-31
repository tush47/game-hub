# React + TypeScript + Vite

this is a kind of clone of a game imfo or database platform i.e. rawg(RAWG is the largest video game database and game discovery service. And we are gladly sharing our 350,000+ games, search, and machine learning recommendations with the world.)


# Deployed it on vercel 
  check it out 
  [Here](https://game-hub-chi-gold.vercel.app/)

# Game Hub

Game Hub is a game encyclopedia and video game discovery platform built with Vite, React, and TypeScript. It integrates with the RAWG.io API to provide detailed information about various video games. The project is deployed on Vercel for easy access.

![Game Hub Screenshot](path_to_screenshot) <!-- Replace with an actual screenshot path -->

## Features

- Browse through a wide collection of video games.
- Search for games by name.
- View detailed information about each game including release date, rating, and more.
- Responsive design for a seamless experience across devices.


## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/tush47/game-hub.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd game-hub
    ```

3. **Install Dependencies**

    This project uses Vite for fast builds. Make sure you have Node.js installed (preferably the latest LTS version).

    ```bash
    npm install
    ```

4. **Run the Development Server**

    Start the local development server:

    ```bash
    npm run dev
    ```

    The app should be running at `http://localhost:3000` by default.

## Configuration

You need an API key from RAWG.io to fetch game data. To configure it:

1. **Obtain an API Key**

    Sign up at [RAWG.io](https://rawg.io) and get your API key.

2. **Create a `.env` File**

    In the root of the project, create a file named `.env` and add your RAWG API key:

    ```env
    VITE_RAWG_API_KEY=your_api_key_here
    ```

3. **Restart the Development Server**

    After adding the `.env` file, restart the development server to apply the changes.

## Project Structure

- `src/` - Contains the source code for the project.
  - `components/` - Reusable React components.
  - `pages/` - Page components for different routes.
  - `services/` - API calls and business logic.
  - `styles/` - Styles and CSS files.
  - `App.tsx` - Main application component.
  - `main.tsx` - Entry point for React application.

## Build

To build the project for production, run:

  ```bash
  npm run build
  ...

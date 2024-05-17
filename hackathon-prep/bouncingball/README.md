# Bouncing Ball Animation in React

This project is a simple animation of a bouncing ball created using React and the HTML Canvas API. The ball is affected by gravity and bounces when it hits the bottom of the canvas. You can also click on the canvas to make the ball jump.

## Features

- **Gravity Simulation**: The ball is affected by a constant gravitational force.
- **Bounce Effect**: The ball bounces off the bottom of the canvas with a reduced velocity to simulate energy loss.
- **User Interaction**: Clicking on the canvas will make the ball jump.

## Installation

1. Install the dependencies:
    ```bash
    npm install
    ```

2. Start the development server:
    ```bash
    npm start
    ```

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:3000`. You should see the ball bouncing inside the canvas. Click anywhere on the canvas to make the ball jump.

## Code Explanation

The main component of this project is the `Canvas` component. Here’s a brief explanation of how it works:

- **State Variables**: 
  - `ballY`: The current Y position of the ball.
  - `velocity`: The current velocity of the ball.

- **Constants**:
  - `gravity`: The gravitational force applied to the ball.
  - `bounceFactor`: The factor by which the ball's velocity is reduced after bouncing.
  - `canvasHeight` and `canvasWidth`: The dimensions of the canvas.
  - `ballRadius`: The radius of the ball.

- **useEffect Hook**: This hook is used to set up and manage the animation. It runs an animation loop using `requestAnimationFrame` to continuously update the ball's position and draw it on the canvas.

- **drawBall Function**: This function clears the canvas and draws the ball at its current position.

- **updateBallPosition Function**: This function updates the ball's position and velocity based on gravity and bounce logic.

- **handleCanvasClick Function**: This function sets the ball's velocity to make it jump when the canvas is clicked.

## Acknowledgements

This project is inspired by basic physics simulations and aims to demonstrate how to use the HTML Canvas API with React for simple animations.

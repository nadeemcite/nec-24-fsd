import React, { useRef, useEffect, useState } from 'react';

export const Canvas: React.FC = (): JSX.Element => {
  // Create a reference to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // State variables for ball position and velocity
  const [ballY, setBallY] = useState<number>(300); // Initial Y position of the ball
  const [velocity, setVelocity] = useState<number>(0); // Initial velocity of the ball

  // Constants for the animation
  const gravity = 0.5; // Gravity effect
  const bounceFactor = -0.7; // Bounce effect (energy loss on bounce)
  const canvasHeight = 400; // Canvas height
  const canvasWidth = 600; // Canvas width
  const ballRadius = 20; // Radius of the ball

  // Refs to store ball position and velocity
  const velocityRef = useRef(velocity);
  const ballYRef = useRef(ballY);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    let animationFrameId: number;

    // Function to draw the ball on the canvas
    const drawBall = (ctx: CanvasRenderingContext2D | null, y: number) => {
      if (ctx) {
        // Clear the canvas before drawing
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Draw the ball
        ctx.beginPath();
        ctx.arc(canvasWidth / 2, y, ballRadius, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
      }
    };

    // Function to update the ball's position and velocity
    const updateBallPosition = () => {
      // Update the velocity with gravity
      velocityRef.current += gravity;

      // Update the ball's Y position
      ballYRef.current += velocityRef.current;

      // Check if the ball hits the bottom of the canvas
      if (ballYRef.current + ballRadius > canvasHeight) {
        ballYRef.current = canvasHeight - ballRadius; // Position the ball at the bottom
        velocityRef.current *= bounceFactor; // Reverse and reduce the velocity for the bounce
      }

      setBallY(ballYRef.current); // Update the state with the new ball position
      setVelocity(velocityRef.current); // Update the state with the new velocity
    };

    // Animation function to continuously update and draw the ball
    const animate = () => {
      updateBallPosition();
      drawBall(context!, ballYRef.current);
      animationFrameId = requestAnimationFrame(animate); // Request the next animation frame
    };

    animate(); // Start the animation

    // Cleanup function to cancel the animation frame on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [bounceFactor]); // Empty dependency array to run the effect only once

  // Function to handle canvas click and make the ball jump
  const handleCanvasClick = () => {
    velocityRef.current = -10; // Adjust this value to control the jump height
    setVelocity(velocityRef.current); // Update the state with the new velocity
  };

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      onClick={handleCanvasClick} // Attach the click event handler
      style={{ border: '1px solid black' }} // Style the canvas with a border
    />
  );
};

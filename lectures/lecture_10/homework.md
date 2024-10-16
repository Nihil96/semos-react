## Homework

### Exercise: The Guessing Game

**Objective:**

Create a fun and interactive Guessing Game where a user tries to guess a randomly generated number between 1 and 100. The application will give feedback on whether the guess is too high, too low, or correct. Redux will be used to manage the game's state, including the random number, the user's guesses, and the number of attempts.

**Requirements:**

1. Random Number Generation:
   - The app will generate a random number between 1 and 100 when the game starts.
2. User Input:
   - The app will have an input field where the user can enter their guess and a button to submit it.
3. Feedback:
   - After each guess, provide feedback:
   - "Too high" if the guess is higher than the generated number.
   - "Too low" if the guess is lower than the generated number.
   - "Correct!" if the guess matches the generated number.
4. Game State in Redux:
   - Store the random number, user guesses, and the number of attempts in Redux.
   - The Redux state will contain the following:
   - targetNumber: The randomly generated number.
   - guess: An array of user guesses.
   - attempts: The number of guesses the user has made.
   - feedback: Feedback message ("Too high", "Too low", "Correct!").
5. Start New Game:
   - Add a button to Start New Game, which will enable the user to play the game again.
6. Display Attempts:
   - Display the number of attempts made by the user.

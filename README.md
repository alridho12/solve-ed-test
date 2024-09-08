# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

# Quiz Application Project

This project is a quiz application developed using Next.js and TypeScript, with the MUI framework for styling. The application allows users to answer multiple-choice questions and provides feedback based on their selected answers.

## Data Structure

The JSON data used in the application has the following structure:

- `question_data.passage`: The text data for the passage.
- `question_data.question`: The text data for the question.
- `question_data.options`: The list of options for the multiple-choice question.
- `question_data.answer`: The correct answer (one of the options).

## Features

1. **Navbar**:
   - **Close Button**: Allows users to return to the home page (welcome).
   - **Progress Bar**: Shows how much the user has progressed in the session (out of 5 questions). It updates as users answer questions.
   - **Info Button**: Displays a modal popup with random text.

2. **Zoom Control**:
   - Allows users to adjust the font size of the reading passage.

3. **Passage Section/Card**:
   - Displays the reading passage text.

4. **Tabs**:
   - Allows users to switch between the passage and the question.

5. **Question Section/Card**:
   - Displays the question that users need to answer.

6. **Multiple Choice Options**:
   - Clickable cards to show the options for the multiple-choice question.

## Interactions

1. **Correct Answer**:
   - The selected answer card will turn green.
   - Displays a feedback card with an animated Lottie file of Ed and the text "Amazing!".
   - Includes a "Continue" button to proceed to the next question.

2. **Incorrect Answer**:
   - The selected answer card will turn red.
   - Displays a feedback card with an animated Lottie file of Ed and the text "Try again!".
   - Includes a "Continue" button to proceed to the next question.

3. **Completion**:
   - When there are no more questions, a "Thank you" page will be shown.

## Getting Started

1. **Installation**:

   Clone the repository and install the dependencies:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   npm install

## Demo
https://solve-ed-test.vercel.app/


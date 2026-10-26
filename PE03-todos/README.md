# Input

The application allows users to enter their daily tasks through a text input field. Users can type a task, such as buying milk or finishing homework, and press the Submit button to add it. The application also prevents users from submitting empty tasks.

# Process

The application is developed using React Native and Expo. It uses React state to manage the input value and an array of to-do items. When the user types, the inputChange function updates the input value. When Submit is pressed, the addTodo function creates a new task object containing a title and a completion status set to false. The new task is added to the todos array, and the input field is cleared.

# Output

The application displays the added tasks in a list using the TodoList component. Each task appears as a separate item on the mobile screen. The updated array is also logged in the terminal for verification.
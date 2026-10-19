# Input

The app allows users to enter their favorite course through a TextInput field. For example, users can type CS624. The app also uses an image file stored in the assets folder and course information from the MSCS program. The course lists are included directly in the code.

# Process

I used React Native core components to build this app. View organizes the layout, while ScrollView allows users to scroll through the page. Image displays the Expo icon, and Text shows course names and headings. TextInput receives the user's input, which is stored using useState. I used StyleSheet to add colors, font sizes, spacing, and borders. The app also uses Linking to open the CityU course catalog.

# Output

The app displays eight core courses, two depth of study courses, and one capstone course. Users can see their typed course in the input box and scroll through the course list. The yellow headings separate each course category.
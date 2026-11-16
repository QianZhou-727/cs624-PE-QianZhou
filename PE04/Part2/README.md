# Input

The application displays six profile cards containing a user's name, occupation, profile image, and description. Users interact with the application by tapping a profile card to expand or collapse it. No text input is required because the profile information is predefined.

# Process

The application is developed using React Native components and Flexbox styling. The ProfileCard component displays the information for each user. The application uses an array of six profiles and the map() function to generate the cards dynamically. Flexbox properties, including flexDirection, flexWrap, justifyContent, and alignItems, organize the cards into a responsive gallery. React state tracks which card is expanded. When a card is tapped, its size and layout change. Tapping it again returns the card to its thumbnail size.

# Output

The application initially displays six blue profile cards in two columns. When a card is selected, it expands to show its information clearly while the remaining cards stay collapsed. The gallery supports scrolling on smaller screens.
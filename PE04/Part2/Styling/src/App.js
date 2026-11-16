
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  useWindowDimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const profileCardColor = 'dodgerblue';
const userImage = require('../assets/images/user.png');

const profiles = [
  {
    id: 1,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description:
      'John is a great JavaScript developer. He loves building React Native applications for iOS and Android.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    occupation: 'UI/UX Designer',
    description:
      'Jane enjoys designing beautiful and user-friendly mobile applications.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    occupation: 'Software Engineer',
    description:
      'Michael specializes in mobile development and enjoys learning new technologies.',
  },
  {
    id: 4,
    name: 'Emily Johnson',
    occupation: 'Frontend Developer',
    description:
      'Emily loves creating interactive interfaces using JavaScript and React.',
  },
  {
    id: 5,
    name: 'David Wilson',
    occupation: 'Full Stack Developer',
    description:
      'David builds web and mobile applications using modern development tools.',
  },
  {
    id: 6,
    name: 'Sarah Lee',
    occupation: 'Mobile App Developer',
    description:
      'Sarah enjoys developing mobile apps and improving the user experience.',
  },
];

class ProfileCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.number,
    expanded: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
    cardWidth: PropTypes.number.isRequired,
  };

  render() {
    const {
      name,
      occupation,
      description,
      image,
      expanded,
      onPress,
      cardWidth,
    } = this.props;

    const cardStyle = expanded
      ? [
          styles.cardContainer,
          styles.expandedCard,
          { width: cardWidth },
        ]
      : [
          styles.cardContainer,
          styles.thumbnailCard,
        ];

    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor="transparent"
        style={styles.touchableContainer}
      >
        <View style={cardStyle}>
          <View
            style={
              expanded
                ? styles.expandedContent
                : styles.thumbnailContent
            }
          >
            <View
              style={[
                styles.cardImageContainer,
                !expanded && styles.thumbnailImageContainer,
              ]}
            >
              <Image
                style={
                  expanded
                    ? styles.cardImage
                    : styles.thumbnailImage
                }
                source={image}
              />
            </View>

            <View
              style={[
                styles.cardTextContainer,
                !expanded && styles.thumbnailTextContainer,
              ]}
            >
              <Text
                style={[
                  styles.cardName,
                  !expanded && styles.thumbnailName,
                ]}
                numberOfLines={expanded ? undefined : 1}
              >
                {name}
              </Text>

              <Text
                style={[
                  styles.cardOccupation,
                  !expanded && styles.thumbnailOccupation,
                ]}
                numberOfLines={expanded ? undefined : 1}
              >
                {occupation}
              </Text>

              <View
                style={[
                  styles.cardSeparator,
                  !expanded && styles.thumbnailSeparator,
                ]}
              />

              <Text
                style={[
                  styles.cardDescription,
                  !expanded && styles.thumbnailDescription,
                ]}
                numberOfLines={expanded ? undefined : 3}
              >
                {description}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

class ProfileGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedId: null,
    };
  }

  handleCardPress = (id) => {
    this.setState((previousState) => ({
      expandedId:
        previousState.expandedId === id ? null : id,
    }));
  };

  render() {
    const { screenWidth } = this.props;
    const { expandedId } = this.state;

    const cardWidth = Math.min(screenWidth - 48, 300);

    return (
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.container}
      >
        {profiles.map((profile) => {
          const expanded = expandedId === profile.id;

          return (
            <View
              key={profile.id}
              style={[
                styles.profileItem,
                expanded && styles.expandedItem,
              ]}
            >
              <ProfileCard
                name={profile.name}
                occupation={profile.occupation}
                description={profile.description}
                image={userImage}
                expanded={expanded}
                onPress={() =>
                  this.handleCardPress(profile.id)
                }
                cardWidth={cardWidth}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

export default function App() {
  const { width } = useWindowDimensions();

  return <ProfileGallery screenWidth={width} />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    paddingVertical: 35,
    paddingHorizontal: 12,
  },

  profileItem: {
    width: '48%',
    minHeight: 170,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },

  expandedItem: {
    width: '100%',
    minHeight: 420,
    marginVertical: 20,
  },

  touchableContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: profileCardColor,
    overflow: 'hidden',

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 5,
          height: 8,
        },
        shadowOpacity: 0.65,
        shadowRadius: 5,
      },
      android: {
        elevation: 10,
      },
    }),
  },

  expandedCard: {
    height: 400,
    borderRadius: 20,
  },

  thumbnailCard: {
    width: 75,
    height: 100,
    borderRadius: 5,
  },

  expandedContent: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  thumbnailContent: {
    width: '100%',
    alignItems: 'center',
  },

  cardImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 3,
          height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  cardImage: {
    width: 80,
    height: 80,
  },

  thumbnailImageContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    marginTop: 12,
  },

  thumbnailImage: {
    width: 24,
    height: 24,
  },

  cardTextContainer: {
    marginTop: 25,
    alignItems: 'center',
    width: '100%',
  },

  thumbnailTextContainer: {
    marginTop: 8,
    paddingHorizontal: 3,
  },

  cardName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },

  thumbnailName: {
    fontSize: 7,
    marginBottom: 3,
  },

  cardOccupation: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },

  thumbnailOccupation: {
    fontSize: 5,
    marginBottom: 4,
  },

  cardSeparator: {
    height: 2,
    width: '80%',
    backgroundColor: 'black',
    marginBottom: 12,
  },

  thumbnailSeparator: {
    height: 1,
    width: '80%',
    marginBottom: 4,
  },

  cardDescription: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'black',
    textAlign: 'center',
    lineHeight: 20,
  },

  thumbnailDescription: {
    fontSize: 4.5,
    lineHeight: 6,
  },
});

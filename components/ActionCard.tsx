import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(webstieLink: string) {
    Linking.openURL(webstieLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What is new in Javascript 21 - ES12?
          </Text>
        </View>
        <Image
          source={require('../images/chinesecombo.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            inventore aliquam eum accusantium iste quibusdam labore aperiam,
            porro eveniet natus nobis id veritatis est odio, ea dolorem
            perferendis! Tempora, perspiciatis.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
          onPress={() => openWebsite('https://github.com/Ankitkr20?tab=repositories')}>
            <Text style={styles.githubText}>Github</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => openWebsite('https://google.com/')}>
            <Text>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  card: {
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius:12,
    backgroundColor: '#FFF'
  },
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  bodyContainer: {},
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  githubText: {},
  googleText: {}
});

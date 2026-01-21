import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>

      {/* Shadow Wrapper */}
      <View style={styles.shadowWrapper}>
        <View style={styles.card}>
          <Image
            source={require('../images/chinesecombo.jpg')}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Parrot</Text>
            <Text style={styles.cardLabel}>Bird</Text>

            <Text style={styles.cardDescription}>
              Bird is soo good. They can fly. This bird is very colorful. The
              name of this bird is Parrot.
            </Text>

            <Text style={styles.cardFooter}>12 parrots were found.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  shadowWrapper: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
    backgroundColor: 'transparent',
  },
  card: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },

  cardImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 2,
  },
  cardLabel: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 10,
  },
  cardFooter: {
    fontSize: 13,
    color: '#888',
    fontStyle: 'italic',
  },
});

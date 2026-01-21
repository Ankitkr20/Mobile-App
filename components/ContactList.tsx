import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Ankit Kumar',
      status: 'Making something 1 ',
      imageUrl: '',
    },
    {
      uid: 2,
      name: 'Rahul Kumar',
      status: 'Making something 2',
      imageUrl: '',
    },
    {
      uid: 3,
      name: 'Ankush Kumar',
      status: 'Making something 3',
      imageUrl: '',
    },
    {
      uid: 4,
      name: 'Raj Kumar',
      status: 'Making something 4',
      imageUrl: '',
    },
    {
      uid: 5,
      name: 'Karuna Kumari',
      status: 'Making something 5',
      imageUrl: '',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={require('../images/chinesecombo.jpg')}
              style={styles.userImage}
            />
            <View >
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 3,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginHorizontal: 8,
  },
  textContainer:{
    flexDirection:'column'
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },

  userStatus: {
    fontSize: 13,
    color: '#666',
  },
});

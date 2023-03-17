import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const ProfileView = () => {

  const handleEditPress = () => {

  }
  const [images, setImages] = useState([
    'https://www.bootdey.com/image/280x280/FF00FF/000000',
    'https://www.bootdey.com/image/280x280/00FFFF/000000',
    'https://www.bootdey.com/image/280x280/FF7F50/000000',
    'https://www.bootdey.com/image/280x280/6495ED/000000',
    'https://www.bootdey.com/image/280x280/DC143C/000000',
    'https://www.bootdey.com/image/280x280/008B8B/000000',
    'https://www.bootdey.com/image/280x280/DC143C/000000',
    'https://www.bootdey.com/image/280x280/008B8B/000000',
    'https://www.bootdey.com/image/280x280/DC143C/000000',
    'https://www.bootdey.com/image/280x280/008B8B/000000',
    'https://www.bootdey.com/image/280x280/DC143C/000000',
    'https://www.bootdey.com/image/280x280/008B8B/000000',
  ]);


  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar1.png' }}
          />
          <Text style={styles.nameText}>Enrique Rodriguez Vela</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          I'm a software engineer from Spain.
          I'm passionate about building great software that improves the lives of those around me.
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>12</Text>
          <Text style={styles.statLabel}>Goals Completed</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>50</Text>
          <Text style={styles.statLabel}>Goals Checked</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>30</Text>
          <Text style={styles.statLabel}>Friends Following</Text>
        </View>
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goals}>
          My Goals
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 90,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  statContainer: {
    alignItems: 'center',
    flex: 1,
  },
  statCount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#999',
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  goalsContainer: {
    alignItems: 'center',
  },
  goals: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
    padding: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    maxHeight: 570,
    marginBottom: 40,
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: '33%',
    padding: 5,
  },
  image: {
    width: '100%',
    height: 120,
  },
};

export default ProfileView;

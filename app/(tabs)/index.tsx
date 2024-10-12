import { Image, StyleSheet, Platform, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import realm from '@/database';

// Exemple d'ajout d'un utilisateur à la base de données
// realm.write(() => {
//     realm.create("User", {
//         id: 2,
//         name: "Test",
//         firstname: "John",
//         gender: "male",
//         email: "john.doe@example.com",
//         password: "johnpassword",
//         dateOfBirth: new Date("1990-01-01"),
//         weight: 80,
//         height: 180,
//         activity_level: "active",
//         profilePicture: "https://example.com/profiles/john_doe.jpg",
//     });
// });

// Exemple de lecture d'utilisateurs
const users = realm.objects("User");
console.log(users);
// Exemple d'ajout d'un utilisateur à la base de données
// realm.write(() => {
//     realm.create("User", {
//         id: 1,
//         name: "Doe",
//         firstname: "John",
//         gender: "male",
//         email: "john.doe@example.com",
//         password: "johnpassword",
//         dateOfBirth: new Date("1990-01-01"),
//         weight: 80,
//         height: 180,
//         activity_level: "active",
//         profilePicture: "https://example.com/profiles/john_doe.jpg",
//     });
// });

// // Exemple de lecture d'utilisateurs
// const users = realm.objects("User");
// console.log(users);

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {users.map((user, i) => (
          <Text key={i}>{user.name}</Text>
        ))}
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

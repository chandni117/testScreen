import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function BottomNav() {
  return (
    <View style={styles.navContainer}>
      <View style={styles.navBar}>
        <Pressable onPress={() => {}} style={styles.iconBehave}>
          <FontAwesome5 name="home" size={24} color="rgb(15, 82, 186)" />
        </Pressable>

        <Pressable onPress={() => {}} style={styles.iconBehave}>
          <MaterialIcons name="quick-contacts-mail" size={24} color="gray" />
        </Pressable>

        <Pressable onPress={() => {}} style={styles.iconBehave}>
          <MaterialIcons name="call-to-action" size={24} color="gray" />
        </Pressable>

        <Pressable onPress={() => {}} style={styles.iconBehave}>
          <MaterialCommunityIcons name="comment-text-multiple" size={24} color="gray" />
        </Pressable>

        <Pressable onPress={() => {}} style={styles.iconBehave}>
          <Ionicons name="settings-sharp" size={24} color="gray" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#eee',
    justifyContent: 'space-evenly',
  },
  iconBehave: {
    padding: 14,
  },
});

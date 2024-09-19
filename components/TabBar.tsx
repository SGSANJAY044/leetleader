import { View, Text, TouchableOpacity } from 'react-native';
import {StyleSheet,Image} from 'react-native'

const iconMap = {
  home: require('../assets/images/Home.png'),
  schedule: require('../assets/images/Schedule.png'),
  analysis: require('../assets/images/Analysis.png'),
  settings: require('../assets/images/Settings.png'),
};

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = route.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        const iconSource = iconMap[options.tabBarIcon];
        
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
          key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{height:'100%'}}
          >
            <Image
            style={styles.image}
            source={iconSource}
          />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar:{
    paddingLeft:30,
    paddingRight:30,
    padding:15,
    margin:15,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor: "#EBA340",
    flexDirection: 'row' 
  },
  image: {
    height:30,
    width:30
  },
});

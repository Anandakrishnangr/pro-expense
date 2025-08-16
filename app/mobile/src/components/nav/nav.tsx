import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useStyle } from '../../features';
import { useNavigation, useRoute } from '@react-navigation/native';

type Navs = 'Dashboard' | 'Settings' | 'transactions' | 'create' | 'analyze';

const NAV_ITEMS: { key: Navs; icon: string }[] = [
  { key: 'Dashboard', icon: 'home-outline' },
  { key: 'transactions', icon: 'swap-horizontal-outline' },
  { key: 'create', icon: 'add-circle-outline' },
  { key: 'analyze', icon: 'analytics-outline' },
  { key: 'Settings', icon: 'settings-outline' },
];

const Nav = () => {
  const styles = useStyle();
  const navigation = useNavigation<any>();
  const route = useRoute();

  return (
    <View style={styles.navContainer}>
      {NAV_ITEMS.map(({ key, icon }) => {
        const isActive = route.name === key;

        return (
          <TouchableOpacity
            key={key}
            style={styles.navItem}
            onPress={() => navigation.navigate(key)}>
            <Icon
              name={icon}
              size={isActive ? 40 : 20}
              style={[styles.navItem, isActive && styles.navItemActive]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Nav;

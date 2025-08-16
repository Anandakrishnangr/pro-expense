import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons"; 
import { useStyle } from "../../features";

type Navs = "home" | "settings" | "transactions" | "create" | "analyze";

const NAV_ITEMS: { key: Navs; icon: string }[] = [
  { key: "home", icon: "home-outline" },
  { key: "transactions", icon: "swap-horizontal-outline" },
  { key: "create", icon: "add-circle-outline" },
  { key: "analyze", icon: "analytics-outline" },
  { key: "settings", icon: "settings-outline" },
];

const Nav = () => {
  const styles = useStyle();
  const [activeTab, setActiveTab] = useState<Navs>("home");

  return (
    <View style={styles.navContainer}>
      {NAV_ITEMS.map(({ key, icon }) => (
        <TouchableOpacity
          key={key}
          style={styles.navItem}
          onPress={() => setActiveTab(key)}
        >
          <Icon
            name={icon}
            size={activeTab === key ? 40 : 20}
            style={[
              styles.navItem, 
              activeTab === key && styles.navItemActive 
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Nav;

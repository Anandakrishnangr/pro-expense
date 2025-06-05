import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';

const Nav = () => {
    return (
        <View style={styles.navcontainer}>
            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Expenses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Income</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Nav;

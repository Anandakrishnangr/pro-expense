import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Nav from '../../components/nav/nav';
import {useTheme} from '../theme';

export const Layout = ({children}: {children: React.ReactNode}) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <View style={{flex: 1}}>{children}</View>
      <Nav />
    </SafeAreaView>
  );
};

import {StyleSheet} from 'react-native';
import {useTheme} from './useTheme';
import {useMemo} from 'react';

export const useStyle = () => {
  const {colors} = useTheme();

  const Style = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.background,
          padding: 24,
        },
        title: {
          fontSize: 26,
          color: colors.text,
          fontWeight: 'bold',
        },
        button: {
          backgroundColor: colors.primary,
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        },
        buttonText: {
          fontSize: 16,
          fontWeight: '600',
          color: colors.text, 
        },
        navContainer: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: colors.background,
          paddingVertical: 2,
          paddingHorizontal:3,
          borderRadius: 80,
          borderWidth: 1,
          borderColor:colors.border,
          marginHorizontal:10
        },
        navItem: {
          color: colors.text,
          paddingVertical: 6,
          paddingHorizontal:8,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        },
        navItemActive:{
            color:colors.success
        }
      }),
    [colors],
  );

  return Style
};

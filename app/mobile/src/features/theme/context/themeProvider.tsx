import {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from 'react';
import {ThemeColors, Themes} from '../types/types';
import {useColorScheme} from 'react-native';
import {darkColors, lightColors} from '../constants/constants';

interface ThemeContextType {
  selectedTheme: Themes;
  setselectedTheme: Dispatch<SetStateAction<Themes>>;
  colors: ThemeColors;
  ToggleThemeMode:()=>any
}

export const ThemeContext = createContext<ThemeContextType>({
  selectedTheme: 'dark',
  setselectedTheme: () => {
  },
  colors: darkColors,
  ToggleThemeMode:()=>null
});

const ThemeProvider = ({children}: {children: ReactNode}) => {
  const scheme = useColorScheme();
  const [selectedTheme, setselectedTheme] = useState<Themes>(scheme || 'dark');
  const colors = selectedTheme === 'light' ? lightColors : darkColors;
  const ToggleThemeMode = ()=>setselectedTheme(prev =>
    prev === 'dark' ? 'light' : 'dark',
  );
  return (
    <ThemeContext.Provider value={{selectedTheme, setselectedTheme, colors,ToggleThemeMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider};

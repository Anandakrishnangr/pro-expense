import { createContext, useState, ReactNode } from 'react';
import { Themes } from '../../../types';
import { useColorScheme } from 'react-native';

interface ThemeContextType {
    selectedTheme: Themes;
    setselectedTheme: (theme: Themes) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    selectedTheme: 'dark',
    setselectedTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const scheme = useColorScheme();
    const [selectedTheme, setselectedTheme] = useState<Themes>(scheme||'dark');
    return (
        <ThemeContext.Provider value={{ selectedTheme, setselectedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

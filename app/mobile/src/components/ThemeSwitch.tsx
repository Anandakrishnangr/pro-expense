import { Switch } from "react-native"
import { useTheme } from "../features"

export const ThemeSwitch = ()=>{
    const {selectedTheme,ToggleThemeMode} = useTheme()
    let value = selectedTheme ==='light'?true:false
    return <Switch value={value} onChange={ToggleThemeMode}></Switch>
}
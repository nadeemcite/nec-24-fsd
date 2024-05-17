import { createContext,useState } from "react";

// interface IThemeProvider{
//     currentTheme: string,
//     toggleTheme: ()=>void
// }

export const ThemeContext = createContext(['light', ()=>{}]);

export const ThemeProvider = ({children}:{children:any}) =>{
    const [currentTheme, setCurrentTheme] = useState<string>('light')

    const toggleTheme = ()=>{
        if(currentTheme === 'light'){
            setCurrentTheme("dark")
        }else{
            setCurrentTheme("light")
        }
    }
    return (
        <ThemeContext.Provider value={[currentTheme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}
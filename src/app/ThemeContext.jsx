'use client'
import React, { createContext, useContext, useReducer } from 'react'
import Navbar from '@/components/Navbar.jsx'
import { useEffect } from 'react'
const ThemeContext = createContext()

const getInitialDarkMode = () => {
  return 'red-200'
}

const initialState = {
  theme: getInitialDarkMode() || 'light',
  userPreferences: {
    fontSize: 'medium',
    reduceAnimations: false,
  },
}

function themeReducer(state, action) {
  // your code here
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: action.theme,
      }
    case 'SET_FONT_SIZE':
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          fontSize: action.payload,
        },
      }
    case 'TOGGLE_REDUCED_MOTION':
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          reduceAnimations: !state.userPreferences.reduceAnimations,
        },
      }
    default:
      return state
  }
}

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)

  useEffect(() => {
    document.documentElement.classList.remove(
      ...document.documentElement.classList
    )
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    if (state.theme === 'light') {
      document.documentElement.classList.add('light')
    }
    if (state.theme === 'system') {
      document.documentElement.classList.add('bg-red-200')
    }
  }, [state.theme])

  const setTheme = (theme) => {
    // your code here
    switch (theme) {
      case 'light':
        dispatch({
          type: 'TOGGLE_THEME',
          theme: 'light',
        })
        break
      case 'dark':
        dispatch({
          type: 'TOGGLE_THEME',
          theme: 'dark',
        })
        break
      case 'system':
        dispatch({
          type: 'TOGGLE_THEME',
          theme: 'red-200',
        })
        break
    }
  }

  return (
    <ThemeContext.Provider value={{ setTheme }}>
      <main className={`bg-${state.theme}`}>
        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </main>
    </ThemeContext.Provider>
  )
}

// Create and use your own hook instead of using useContext in the components
export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider

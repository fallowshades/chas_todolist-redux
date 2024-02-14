import { configureStore } from '@reduxjs/toolkit'
import stateReducer from './features/todos/todosSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      todoState: stateReducer,
    },
  })
}

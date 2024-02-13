'use client'
import { configureStore } from '@reduxjs/toolkit'

import stateReducer from './stateSlice'

const store = configureStore({
  reducer: {
    todoState: stateReducer,
  },
})

export default store

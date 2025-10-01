import { configureStore } from "@reduxjs/toolkit"

// Create a basic Redux store
// Add your reducers here as you build out your application
export const store = configureStore({
  reducer: {
    // Add your reducers here
    // example: counterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

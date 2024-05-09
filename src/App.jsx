import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserProfile from './components/UserProfile'
import MovieList from './components/MovieList'

function App() {

  return (
   <div>
    <UserProfile />
    <MovieList />
   </div>
  )
}

export default App

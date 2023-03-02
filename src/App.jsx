import { useState } from 'react'
import { AuthProvider } from './auth/context/AuthProvider'
import { AppRoute } from './router/AppRoute'


  

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider > 
       <AppRoute />       
    </AuthProvider>
  )
}

export default App

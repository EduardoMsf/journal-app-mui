import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
// import { CheckingAuth } from "../ui/components/checkingAuth"
import { useCheckAuth } from "../hooks"
import { CheckingAuth } from "../ui/components/CheckingAuth"

export const AppRouter = () => {
  
  const { status } = useCheckAuth()

  if( status ==='checking'){
    return <CheckingAuth />
  }

  return (
    <Routes>
      {/*Login y registro*/ }
      {
        status === "authenticated"
        ? <Route path="/*" element={<JournalRoutes />} />
        : <Route path="/auth/*" element={<AuthRoutes />}/>
      }
    
    <Route path='/*' element={<Navigate to='/auth/login' />} />

      {/*JournalApp*/ }
      
    </Routes>
  )
}

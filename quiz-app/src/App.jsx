import {Routes,Route} from 'react-router-dom'
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/counter" element={<h1>Counter App</h1>}></Route>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/login" element={<h1>Login pg</h1>}></Route>
        <Route path="/logout" element={<h1>Logout pg</h1>}></Route>
        <Route path="*" element={<h1>No pg available</h1>}></Route>
      </Routes>
    </div>
  )
}
export {App}
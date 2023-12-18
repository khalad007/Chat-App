import { Route, Routes } from "react-router-dom"
import Login from "./Component/Login"
import MainContainer from "./Component/MainContainer"
import Welcome from "./Component/Welcome"
import TextArea from "./Component/TextArea"
import CreateGroup from "./Component/CreateGroup"
import Users_Group from "./Component/Users_Group"
import Groups from "./Component/Groups"

function App() {
  return (
    <div className="bg-base-300 min-h-screen">

      {/* <MainContainer></MainContainer> */}
      {/* <Login></Login> */}
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="app" element={<MainContainer></MainContainer>}>
          <Route path="welcome" element={<Welcome></Welcome>}></Route>
          <Route path="chat" element={<TextArea></TextArea>}></Route>
          <Route path="groups" element={<Groups></Groups>}></Route>
          <Route path="users" element={<Users_Group></Users_Group>}></Route>
          <Route path="create-group" element={<CreateGroup></CreateGroup>}></Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App

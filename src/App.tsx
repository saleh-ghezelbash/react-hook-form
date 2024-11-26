// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TodoList from "./components/TodoList";
// import TodoContext from "./contexts/TodoContext";
// import AddTodo from "./components/AddTodo";

// const App = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-emerald-200">
//       <TodoContext>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/">
//               <Route index element={<TodoList />} />
//               <Route path="/create" element={<AddTodo />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </TodoContext>
//     </div>
//   );
// };

// export default App;

import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;

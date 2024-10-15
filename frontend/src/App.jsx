import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/Dashboard/VerticalNavigationBar/ProtectedRoute";
const App = () => {
  // return <SignUpPage />;
  // return <SignInPage />;
  // return <DashboardPage />;

  return (
    <Routes path="/">
      <Route index element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;

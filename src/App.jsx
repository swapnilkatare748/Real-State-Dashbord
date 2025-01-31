import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Propertiespage from "./pages/PropertiesPage/Propertiespage";
import Analytics from "./pages/AnalyticsPages/Analytics";
import InboxPage from "./pages/InboxPage/InboxPage";
import ReportsPage from "./pages/ReportsPage/ReportsPage";
import Notifications from "./pages/NotificationsPage/Notifications";
import Setting from "./pages/SettingsPage/Setting";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RequestPage from "./pages/RequestPage/RequestPage";
import Addproperty from "./pages/AddPropertyPage/Addproperty";
import LoginPage from "./pages/LoginPage/LoginPage";
import Register from "./pages/Register/Register";
import AdmineDashbord from "./Components/Files/AdmineDashbord";
import UserDashbord from "./Components/Files/UserDashbord";
import Error from "./pages/PageNotFound/ErrorPage/Error";

// ProtectedRoute component to handle route protection
const ProtectedRoute = ({ children, allowedRoles }) => {
  // Retrieve data from localStorage
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const userType = localStorage.getItem("userRole");

  console.log("ProtectedRoute - LoggedIn:", isLoggedIn);
  console.log("ProtectedRoute - UserType:", userType);
  console.log("Allowed Roles:", allowedRoles); // Check allowedRoles array

  // Check if user is logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Check if user role is allowed
  // if (!allowedRoles.includes(userType)) {
  //   console.log("role : ", allowedRoles)
  //   console.error(`Access Denied: User type "${userType}" not allowed.`);
  //   return <Navigate to="/login" replace />;
  // }

  // Render the children (protected page)
  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdmineDashbord />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<HomePage />} />
          <Route path="properties" element={<Propertiespage />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="inbox" element={<InboxPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Setting />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="requests" element={<RequestPage />} />
          <Route path="add-property" element={<Addproperty />} />
        </Route>

        
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={["User"]}>
              <UserDashbord />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<HomePage />} />
          <Route path="inbox" element={<InboxPage />} />
          <Route path="properties" element={<Propertiespage />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<Setting />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="requests" element={<RequestPage />} />
          <Route path="add-property" element={<Addproperty />} />
        </Route>

        {/* Default Route (Error Page) */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

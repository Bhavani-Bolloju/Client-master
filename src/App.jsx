import React from "react";
import PreviewPage from "./pages/PreviewPage";
import { Route, Routes, Navigate } from "react-router-dom";
import ClientMaster from "./pages/ClientMaster";
import ViewClients from "./pages/ViewClients";
import AddClient from "./pages/AddClient";
import CreateProfile from "./components/addclient/CreateProfile";
import PaymentSetup from "./components/addclient/PaymentSetup";
import ThemeSetup from "./components/addclient/ThemeSetup";
import ModuleSetup from "./components/addclient/moduleSetup/ModuleSetup";
import Success from "./components/addclient/Success";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PreviewPage />} />
        <Route path="/clientMaster" element={<ClientMaster />}>
          <Route index element={<Navigate to="viewClients" />} />
          <Route path="viewClients" element={<ViewClients />} />
          <Route path="addClient" element={<AddClient />}>
            <Route index element={<Navigate to="createProfile" />} />
            <Route path="createProfile" element={<CreateProfile />} />
            <Route path="payment" element={<PaymentSetup />} />
            <Route path="theme" element={<ThemeSetup />} />
            <Route path="module" element={<ModuleSetup />} />
          </Route>
          <Route path="success" element={<Success />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

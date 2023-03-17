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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PreviewPage />} />
        <Route path="/clientMaster" element={<ClientMaster />}>
          <Route index element={<Navigate to="viewClients" />}></Route>
          <Route path="viewClients" element={<ViewClients />}></Route>
          <Route path="addClient" element={<AddClient />}>
            <Route index element={<Navigate to="createProfile" />}></Route>
            <Route path="createProfile" element={<CreateProfile />}></Route>
            <Route path="payment" element={<PaymentSetup />}></Route>
            <Route path="theme" element={<ThemeSetup />}></Route>
            <Route path="module" element={<ModuleSetup />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

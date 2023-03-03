import "./styles.css";
import { Routes, Route } from "react-router-dom";
import routeList from "./routes";
import { useEffect, useState } from "react";

export default function App() {
  const adminRoles = ["page2"];

  const [adminRoutes, setAdminRoutes] = useState([]);

  useEffect(() => {
    setAdminRoutes(routeList.admin.filter((x) => adminRoles.includes(x.path)));
  }, []);

  console.log("adminRoutes", adminRoutes);

  return (
    <Routes>
      <Route path="/">
        {routeList.client.map((client) => (
          <Route
            key={client.id}
            path={client.path}
            element={client.component}
          />
        ))}
      </Route>

      <Route path="/admin">
        {adminRoutes.map((admin) => (
          <Route key={admin.id} path={admin.path} element={admin.component} />
        ))}
      </Route>
    </Routes>
  );
}

import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "components/layout/ErrorPage";
import SidebarRoute from "components/layout/wrappers/SidebarRoute";
import Transactions from "components/transactions";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <SidebarRoute>
        <Transactions />
      </SidebarRoute>
    ),
    children: [
      {
        path: "/transactions",
        element: (
          <SidebarRoute>
            <Transactions />
          </SidebarRoute>
        ),
      },
    ],
  },
]);

export default router;

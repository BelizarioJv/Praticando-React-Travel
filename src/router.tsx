import { createBrowserRouter } from "react-router-dom";
import { Form } from "./pages/Form";
import { RootLayout } from "./pages/RootLayout";
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";

// import { Result } from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/", // dentro de rootLayout (principal) vai ter as rotas produtos e cart
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

export default router;

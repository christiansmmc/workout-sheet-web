import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { buttonTheme } from "./components/button/buttonTheme/buttonTheme.tsx";
import { inputTheme } from "./components/input/inputTheme/inputTheme.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WorkoutPage from "./routes/workout.tsx";
import Exercises from "./routes/exercises.tsx";
import CreateWorkout from "./routes/createWorkout.tsx";
import Main from "./routes/main.tsx";
import Register from "./routes/register.tsx";
import Login from "./routes/login.tsx";

export const theme = extendTheme({
  components: { Button: buttonTheme, Input: inputTheme },
  styles: {
    global: {
      "html, body": {
        height: "100%",
        width: "100%",
        color: "white",
        display: "flex",
        padding: "0",
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        boxSizing: "border-box",

        backgroundColor: "#161616",
        maxWidth: "500px",
        margin: "0 auto",
      },
      "#root": {
        width: "100%",
      },
      "@media (min-width: 500px)": {
        "#root": {
          border: "1px solid #5A5A5A",
        },
      },
    },
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/workout",
    element: <WorkoutPage />,
  },
  {
    path: "/workout/:workoutId",
    element: <Exercises />,
  },
  {
    path: "/create-workout",
    element: <CreateWorkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

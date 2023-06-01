import { Loader } from "@mantine/core";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/index";
import StudentSubmissionDetails from "../pages/assignment/studentSubmissionDetails";

const Assignment = lazy(() => import("../pages/assignment"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Assignment />} />
          <Route path={"/:id"} element={<StudentSubmissionDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

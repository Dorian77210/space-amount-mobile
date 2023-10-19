import { CircularProgress } from "@mui/material";
import { ReactNode, Suspense } from "react";

const RouteLoader = ({ children }: { children: ReactNode }) => (
    <Suspense
      fallback={
        <>
          <CircularProgress />
        </>
      }
    >
      {children}
    </Suspense>
  );

export default RouteLoader;
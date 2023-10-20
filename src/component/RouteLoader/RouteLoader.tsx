import { CircularProgress } from "@mui/material";
import { ReactNode, Suspense } from "react";

const RouteLoader = ({ children }: { children: ReactNode }) => (
    <Suspense
      fallback={
        <>
          <CircularProgress sx={{
            position: 'fixed',
            top: '50%',
            right: '50%',
          }} />
        </>
      }
    >
      {children}
    </Suspense>
  );

export default RouteLoader;
import Router from "@component/Router/Router";
import "./App.css";
import { useEffect, useState } from "react";
import useUserId from "@hook/useUserId";
import UserContext from "@data/context/UserContext";

function App() {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    useUserId().then((res) => setUserId(res));
  }, []);

  return (
    <>
      {userId && (
        <UserContext.Provider value={userId}>
          <div>
            <Router />
          </div>
        </UserContext.Provider>
      )}
    </>
  );
}

export default App;

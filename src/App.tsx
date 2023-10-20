import Router from "@component/Router/Router";
import "./App.css";
import { useEffect, useState } from "react";
import useUserId from "@hook/useUserId";
import UserContext from "@data/context/UserContext";
import { Provider } from "react-redux";
import { store } from "@data/redux/store";

function App() {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    useUserId().then((res) => setUserId(res));
  }, []);

  return (
    <>
      {userId && (
        <UserContext.Provider value={userId}>
          <Provider store={store}>
            <div>
              <Router />
            </div>
          </Provider>
        </UserContext.Provider>
      )}
    </>
  );
}

export default App;

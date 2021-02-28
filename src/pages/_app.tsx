import React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import "antd/dist/antd.less";
import "../styles/globals.css";
import { store } from "../utils/store";

const queryClient = new QueryClient();

const App: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

export default App;

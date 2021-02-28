import React, { useState } from "react";
import { Button, Spin } from "antd";
import { connect } from "react-redux";

import { RootState, Dispatch } from "../utils/store";
import usePosts from "../queries/usePosts";
import useLogin from "../mutations/useLogin";

import "antd/dist/antd.less";
import logo from "../res/icons/logo.svg";
import "../styles/tailwind.css";
// import "../styles/sample.less";
import "../App.css";

interface Props {
  authenticated: RootState["auth"]["authenticated"];
}
const mapState = (state: RootState) => ({
  authenticated: state.auth.authenticated,
});

const Home: React.FC<Props> = ({ authenticated }) => {
  const [count, setCount] = useState(0);
  const { data, isError, isLoading } = usePosts();
  const loginMutation = useLogin();
  if (isLoading) {
    return <Spin size="large" />;
  }
  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello! Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <Button type="primary">Blah</Button>
        <Button
          type="primary"
          size="large"
          disabled={authenticated}
          loading={loginMutation.isLoading}
          onClick={async () =>
            loginMutation.mutate({
              username: "luigi@example.com",
              password: "blahblah",
              remember: false,
            })
          }
        >
          Blah
        </Button>
        <p className="bg-black">
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  );
};

export default connect(mapState)(Home);

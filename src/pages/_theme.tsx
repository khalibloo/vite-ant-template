import { Spin } from "antd";
import React from "react";
import type { ITheme } from "vite-plugin-react-pages";
import App from "./_app";

const Theme: ITheme = ({ staticData, loadedData, loadState }) => {
  // console.log("#Theme", staticData, loadedData, loadState);
  // You can generate side nav menu from staticData
  // const sideMenuData = useMemo(() => generateSideMenu(staticData), [staticData])
  let content;
  if (loadState.type === "404") {
    content = <p>Page not found.</p>;
  } else if (loadState.type === "load-error") {
    content = <p>Load error!</p>;
  } else if (loadState.type === "loading") {
    content = <Spin size="large" />;
  } else {
    // loadState.type === 'loaded'
    // Runtime page data for current page
    const pageData = loadedData[loadState.routePath];
    // the default export of the main module
    const Component = pageData.main.default;
    content = <Component />;
  }

  return <App>{content}</App>;
};
export default Theme;

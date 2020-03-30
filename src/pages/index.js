import Navs from "../component/navbar";
import React from "react";
import Content from "../component/content";

class Index extends React.Component {
  render() {
    return (
      <>
        <Navs />
        <Content />
      </>
    );
  }
}
export default Index;

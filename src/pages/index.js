import Navs from "../component/navbar";
import React from "react";
import Content from "../component/content";
import Footer from "../component/footer";
class Index extends React.Component {
  render() {
    return (
      <>
        <Navs />
        <Content />
        <Footer />
      </>
    );
  }
}
export default Index;

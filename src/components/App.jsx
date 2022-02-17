import React from "react";
import Gallery from "./Gallery";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="font-schoolbell" id="pageTop">
      <Header />
      <Section />
      <Gallery />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

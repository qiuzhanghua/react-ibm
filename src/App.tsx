import "./App.scss";
import React from "react";
import { Add } from "@carbon/icons-react";
import { Button, Content } from "carbon-components-react";

function App () {
  const conClick = () => {
    console.log("Click");
  };

  return (
    <div id="root">
      <Content>
        <Button renderIcon={Add} onClick={conClick}>
          Test
        </Button>
      </Content>
    </div>
  );
}

export default App;

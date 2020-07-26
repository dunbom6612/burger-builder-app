
import React from "react";
import Aux from "../../hoc/Aux";
import Layout from './components/Layoyt/Layout'
const layout = (props) => (
  <Aux>
    <div>Toolbbar, SideDrawer, Back drop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;

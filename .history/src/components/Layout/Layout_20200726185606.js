import React from "react";
import Aux from "../../hoc/Aux";

const layout = (props) => (
  <Aux>
    <div>Toolbbar, SideDrawer, Back drop</div>
    <main className='Content'>{props.children}</main>
  </Aux>
);

export default layout;

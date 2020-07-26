const { ProgressPlugin } = require("webpack");

import React from 'react';
import Aux from '../../hoc/Aux'
const layout = (props) => (
    <div>Toolbbar, SideDrawer, Back drop</div>
    <main>
        {ProgressPlugin.childern}
    </main>
);
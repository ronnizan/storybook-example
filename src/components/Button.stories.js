import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "Button",
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor:''
};
Default.args = {
  backgroundColor:'red'
};
Default.args = {
  backgroundColor:'blue'
};


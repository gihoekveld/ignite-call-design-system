import{i as e}from"./preload-helper-Ru7R3Y4F.js";import{t}from"./jsx-runtime-BCm3eTdV.js";import{i as n,n as r,s as i,u as a}from"./dist-PAqxjlz8.js";var o,s,c,l,u,d,f,p;e((()=>{a(),o=t(),{within:s,userEvent:c,expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`Form/Checkbox`,component:n,tags:[`autodocs`],args:{},decorators:[e=>(0,o.jsxs)(r,{as:`label`,css:{display:`flex`,flexDirection:`row`,gap:`$2`},children:[(0,o.jsx)(e,{}),(0,o.jsx)(i,{size:`sm`,children:`Accept terms of use`})]})]},d={play:async({canvasElement:e})=>{let t=s(e).getByRole(`checkbox`,{name:`Accept terms of use`});await l(t).toBeInTheDocument(),await l(t).not.toBeChecked(),await c.click(t),await l(t).toBeChecked()}},f={args:{disabled:!0},play:async({canvasElement:e})=>{await l(s(e).getByRole(`checkbox`,{name:`Accept terms of use`})).toBeDisabled()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: 'Accept terms of use'
    });
    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: 'Accept terms of use'
    });
    await expect(checkbox).toBeDisabled();
  }
}`,...f.parameters?.docs?.source}}},p=[`Primary`,`Disabled`]}))();export{f as Disabled,d as Primary,p as __namedExportsOrder,u as default};
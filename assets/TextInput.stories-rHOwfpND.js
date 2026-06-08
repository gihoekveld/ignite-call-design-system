import{i as e}from"./preload-helper-Ru7R3Y4F.js";import{t}from"./jsx-runtime-BCm3eTdV.js";import{l as n,n as r,s as i,u as a}from"./dist-PAqxjlz8.js";var o,s,c,l,u,d,f,p,m;e((()=>{a(),o=t(),{within:s,userEvent:c,expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`Form/TextInput`,component:n,tags:[`autodocs`],args:{},decorators:[e=>(0,o.jsxs)(r,{as:`label`,css:{display:`flex`,flexDirection:`column`,gap:`$2`},children:[(0,o.jsx)(i,{size:`sm`,children:`Email address`}),(0,o.jsx)(e,{})]})]},d={args:{placeholder:`Type your name`},play:async({canvasElement:e})=>{let t=s(e),n=t.getByRole(`textbox`);await l(n).toBeInTheDocument(),await c.type(n,`Giselle`),await l(n).toHaveValue(`Giselle`),await l(t.getByPlaceholderText(`Type your name`)).toBeInTheDocument()}},f={args:{disabled:!0},play:async({canvasElement:e})=>{await l(s(e).getByRole(`textbox`)).toBeDisabled()}},p={args:{prefix:`cal.com/`},play:async({canvasElement:e})=>{await l(s(e).getByText(`cal.com/`)).toBeInTheDocument()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your name'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, 'Giselle');
    await expect(input).toHaveValue('Giselle');
    await expect(canvas.getByPlaceholderText('Type your name')).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await expect(input).toBeDisabled();
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: 'cal.com/'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('cal.com/')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}},m=[`Primary`,`Disabled`,`WithPrefix`]}))();export{f as Disabled,d as Primary,p as WithPrefix,m as __namedExportsOrder,u as default};
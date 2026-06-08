import{i as e}from"./preload-helper-Ru7R3Y4F.js";import{t}from"./jsx-runtime-BCm3eTdV.js";import{c as n,n as r,s as i,u as a}from"./dist-PAqxjlz8.js";var o,s,c,l,u,d,f,p;e((()=>{a(),o=t(),{within:s,userEvent:c,expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`Form/TextArea`,component:n,tags:[`autodocs`],args:{},decorators:[e=>(0,o.jsxs)(r,{as:`label`,css:{display:`flex`,flexDirection:`column`,gap:`$2`},children:[(0,o.jsx)(i,{size:`sm`,children:`Observations`}),(0,o.jsx)(e,{})]})]},d={args:{placeholder:`Add any observations...`},play:async({canvasElement:e})=>{let t=s(e),n=t.getByRole(`textbox`);await l(n).toBeInTheDocument(),await l(t.getByPlaceholderText(`Add any observations...`)).toBeInTheDocument(),await c.type(n,`Lorem ipsum dolor sit amet.`),await l(n).toHaveValue(`Lorem ipsum dolor sit amet.`)}},f={args:{disabled:!0},play:async({canvasElement:e})=>{await l(s(e).getByRole(`textbox`)).toBeDisabled()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Add any observations...'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox');
    await expect(textarea).toBeInTheDocument();
    await expect(canvas.getByPlaceholderText('Add any observations...')).toBeInTheDocument();
    await userEvent.type(textarea, 'Lorem ipsum dolor sit amet.');
    await expect(textarea).toHaveValue('Lorem ipsum dolor sit amet.');
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox');
    await expect(textarea).toBeDisabled();
  }
}`,...f.parameters?.docs?.source}}},p=[`Primary`,`Disabled`]}))();export{f as Disabled,d as Primary,p as __namedExportsOrder,u as default};
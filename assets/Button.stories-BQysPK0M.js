import{i as e}from"./preload-helper-Ru7R3Y4F.js";import{t}from"./jsx-runtime-BCm3eTdV.js";import{d as n,f as r,r as i,u as a}from"./dist-PAqxjlz8.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{a(),n(),o=t(),{within:s,userEvent:c,expect:l,fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Form/Button`,component:i,tags:[`autodocs`],args:{children:`Send`,variant:`primary`,size:`md`,disabled:!1},argTypes:{variant:{options:[`primary`,`secondary`,`tertiary`],control:{type:`inline-radio`}},size:{options:[`sm`,`md`],control:{type:`inline-radio`}},disabled:{control:{type:`boolean`}},onClick:{action:`click`}}},f={args:{onClick:u(),children:`Send`},play:async({canvasElement:e,args:t})=>{let n=s(e);await c.click(n.getByRole(`button`,{name:`Send`})),await l(t.onClick).toHaveBeenCalledTimes(1)}},p={args:{variant:`secondary`,children:`Create new`}},m={args:{variant:`tertiary`,children:`Cancel`}},h={args:{size:`sm`}},g={args:{children:(0,o.jsxs)(o.Fragment,{children:[`Próximo passo`,(0,o.jsx)(r,{weight:`bold`})]})}},_={args:{onClick:u(),disabled:!0},play:async({canvasElement:e,args:t})=>{let n=s(e);await c.click(n.getByRole(`button`,{name:`Send`})),await l(n.getByRole(`button`,{name:`Send`})).toBeDisabled(),await l(t.onClick).toHaveBeenCalledTimes(0)}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: fn(),
    children: 'Send'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Send'
    }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: fn(),
    disabled: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Send'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Send'
    })).toBeDisabled();
    await expect(args.onClick).toHaveBeenCalledTimes(0);
  }
}`,..._.parameters?.docs?.source}}},v=[`Primary`,`Secondary`,`Tertiary`,`Small`,`WithIcon`,`Disabled`]}))();export{_ as Disabled,f as Primary,p as Secondary,h as Small,m as Tertiary,g as WithIcon,v as __namedExportsOrder,d as default};
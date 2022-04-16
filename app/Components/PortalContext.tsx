import * as React from 'react';

export default React.createContext({
  gates: {}, // key: 挂载点名称，value: 需要渲染的React.Node
  teleport: (gateName: string[], element: JSX.Element) => {}, //将需要渲染的element，传送到对应的挂载点上
  remove:(gateName:string) => {}
});

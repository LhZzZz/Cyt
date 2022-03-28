import React from 'react';
import PortalContext from './PortalContext';

const wrapWithTeleport = WrappedComponent => props => ( // HOC，向组件中注入teleport方法，让组件能够有传送能力
  <PortalContext.Consumer>
    {
      (value) => {
        const { teleport, remove } = value;
        return <WrappedComponent teleport={teleport} remove={remove} {...props} />;
      }
    }
</PortalContext.Consumer>
);

export default wrapWithTeleport;

import * as React from 'react'
import  PortalContext  from './PortalContext'
import {View} from "react-native";

interface IProps {
  children: JSX.Element
}

class PortalProvider extends React.Component<IProps> {
  public state = {
    gates: {}
  }

  public render() {
    const { children } = this.props
    return (
      <PortalContext.Provider value={{ gates: this.state.gates, teleport: this.teleport, remove:this.remove }}>
        {children}
      </PortalContext.Provider>
    )
  }

  private teleport = (gateName: string, element: JSX.Element) =>
    this.setState({ gates: { ...this.state.gates, [gateName]: element } })

  private remove = (gateName: string) =>{
    let {gates} = this.state
    gates[gateName] = null
    this.setState({ gates: { gates, [gateName]: <View/> } })
  }
}

export default PortalProvider

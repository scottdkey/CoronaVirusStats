import React from 'react'
import ResponsiveLayout from "../ResponsiveLayout"
import MobileView from '../MobileView'
import DesktopView from '../DesktopView'

const Content = ({items}) => (
  <ResponsiveLayout
  breakPoint={767}
  renderDesktop={()=>(
    <DesktopView items={items} />
  )}
  renderMobile={() => <MobileView items={items} />}
  />
)
export default Content
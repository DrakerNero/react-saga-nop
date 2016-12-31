import React from 'react'
import ui from 'redux-ui'

const createMenu = (menus, activeMenu) => Component => (props) => {
  const Menu = ui({
    key: 'menu',
    state: {
      activeMenu,
    },
  })(Component)
  return <Menu menus={menus} {...props} />
}
export default createMenu

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Menu from 'src/components/Menu'
import 'src/styles/ittp.scss'

const menus = [
  {
    groupLabel: 'ทั่วไป',
    submenus: [
      { url: '#', label: 'หน้าแรก' },
      { url: '#', label: 'ตั้งค่า' },
    ],
  },
  {
    groupLabel: 'สัญญา',
    submenus: [
      { url: '#', label: 'ใบสมัคร' },
      { url: '#', label: 'สัญญาเปิด' },
      { url: '#', label: 'สัญญาปิด' },
    ],
  },
  {
    groupLabel: 'ข้อมูลลูกค้า',
    submenus: [
      { url: '#', label: 'ข้อมูลลูกค้า' },
    ],
  },
]

storiesOf('Menu', module)
  .addDecorator(story => (
    <div className="container is-fluid">
      <div className="columns">
        <div className="column is-2">
          { story() }
        </div>
      </div>
    </div>
  ))
  .add('with props.ui.activeMenu = "ใบสมัคร"', () => {
    const ui = { activeMenu: 'ใบสมัคร' }

    return <Menu menus={menus} ui={ui} />
  })

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import MainLayout from 'src/layouts/MainLayout'
import Menu from 'src/components/Menu'
import Home from 'src/routes/home'
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

const ui = {
  activeMenu: 'หน้าแรก',
}

storiesOf('MainLayout', module)
  .add('with menu and content', () => {
    const DummyMenu = <Menu menus={menus} ui={ui} />
    const DummyContent = <Home />
    return (
      <MainLayout menu={DummyMenu} content={DummyContent} />
    )
  })

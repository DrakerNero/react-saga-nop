import React from 'react'
import newApplicationImg from 'assets/new_application.svg'
import customerImg from 'assets/customer.svg'
import settingsImg from 'assets/settings.svg'
import {
  NEW_APPLICATION,
} from 'texts'
import Task from './components/Task'

const FrequentTasks = () => (
  <div className="columns">
    <Task image={newApplicationImg} name={NEW_APPLICATION} url="/applications/new" />
    <Task image={customerImg} name="ลูกค้า" url="#" />
    <Task image={settingsImg} name="ตั้งค่า" url="#" />
  </div>
)

export default FrequentTasks

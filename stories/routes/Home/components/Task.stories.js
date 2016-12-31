import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Task from 'src/routes/home/components/Task'
import 'src/styles/ittp.scss'
import newApplicationImg from 'assets/new_application.svg'

storiesOf('Task', module)
  .addDecorator(story => (
    <div className="columns">
      { story() }
    </div>
  ))
  .add('with image and name', () => (
    <Task image={newApplicationImg} name="เปิดสัญญา" url="#" />
  ))

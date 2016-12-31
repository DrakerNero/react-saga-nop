import React from 'react'
import { storiesOf } from '@kadira/storybook'
import NewApplicationForm from 'src/routes/applications/new/containers/NewApplicationForm'
import 'src/styles/ittp.scss'

storiesOf('NewApplicationForm', module)
  .add('form', () => (
    <NewApplicationForm />
  ))

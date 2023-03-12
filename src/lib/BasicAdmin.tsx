
import React from 'react'

import { useSelector, Provider } from 'react-redux'


import BasicHead from './BasicHead'
import BasicFoot from './BasicFoot'


function BasicAdmin(props: any) {
  const { ctx, spec } = props
  const model = ctx().model

  const { frame } = spec
  
  const part = model.app.web.frame[frame].part.admin
  
  const headSpec: any = {
    frame
  }

  const footSpec: any = {
    frame
  }
  
  return (
    <div>
      <BasicHead ctx={ctx} spec={headSpec} />
      <BasicFoot ctx={ctx} spec={footSpec} />
    </div>
  )
}


export default BasicAdmin

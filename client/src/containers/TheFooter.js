import React from 'react'
import { CBreadcrumbRouter, CFooter, CLink, CSubheader } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
        // routes={routes} 
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-speech" alt="Settings"style={{margin:'0 10px'}} />Contact Us
          </CLink>
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="" alt="Settings" />&nbsp;Terms of Service
            </CLink>

          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-ear" alt="Settings" />&nbsp;Privacy Policy
            </CLink>
        </div>
      </CSubheader>
    </CFooter>
  )
}

export default React.memo(TheFooter)

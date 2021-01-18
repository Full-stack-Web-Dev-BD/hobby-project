import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CWidgetIcon,
  CLink,
  CCardGroup,
  CWidgetProgressIcon,
  CInput
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import MainChartExample from '../charts/MainChartExample.js'
import { DocsLink } from 'src/reusable/index.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <div className="home-page">
      <div className="row">
        <div className="col-md-7">
          <img src='/images/Home-page.png' />
        </div>
        <div className="col-md-5">
          <CCard>
            <CCardHeader>
              Title
              <DocsLink name="CCard" />
            </CCardHeader>
            <CCardBody>
              <h3>What is Lorem ipsum dolor sit amet ? </h3>
              <p>
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
              <h3>What is Lorem ipsum dolor sit amet ? </h3>
              <p>
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </CCardBody>
          </CCard>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              Title
              <DocsLink name="CCard" />
            </CCardHeader>
            <CCardBody>
              <h3>What is Lorem ipsum dolor sit amet ? </h3>
              <p>
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </CCardBody>
          </CCard>
        </div>

        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              Title
              <DocsLink name="CCard" />
            </CCardHeader>
            <CCardBody>
              <h3>What is Lorem ipsum dolor sit amet ? </h3>
              <p>
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </CCardBody>
          </CCard>
        </div>

        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              Title
              <DocsLink name="CCard" />
            </CCardHeader>
            <CCardBody>
              <h3>What is Lorem ipsum dolor sit amet ? </h3>
              <p>
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </CCardBody>
          </CCard>
        </div>
      </div>
      <div className="row">

        <div className="col-md-4" >
          <div className="col-md-10 offset-md-1">
            <CCard color="success" className="text-white text-center">
              <CCardBody  className="custom-card-bg" >
                <blockquote className="card-bodyquote">
                  <h3>Speak and write more correct, more beautiful English</h3>
                  <p>Join  my nwesletter and get my new lessons by emal </p>
                  <p style={{textTransform:'capitalize'}}>(also  get my  free  tenses PDFs when you join )</p>
                  <CInput id="name" placeholder="Your Email Address " required />
                  <CButton type="submit" size="sm" color="warning" style={{ width: '100%', marginTop:'30px',color:'white' ,fontWeight:'600',textTransform:'capitalize' }}>click  here  to join </CButton>
                </blockquote>
              </CCardBody>
            </CCard>
          </div>
        </div>

        <div className="col-md-4" >
          <div className="col-md-10 offset-md-1">
            <CCard color="success" className="text-white text-center">
              <CCardBody  className="custom-card-bg">
                <blockquote className="card-bodyquote mtb-50">
                  <h1>Test your knowledge.</h1>
                  <CButton type="submit" size="sm" color="warning" style={{ width: '100%', marginTop:'30px',color:'white' ,fontWeight:'600',textTransform:'capitalize' }}>take a free test  </CButton>

                </blockquote>
              </CCardBody>
            </CCard>
          </div>
        </div>

        <div className="col-md-4" >
          <div className="col-md-10 offset-md-1">
            <CCard color="success" className="text-white text-center">
              <CCardBody  className="custom-card-bg">
                <blockquote className="card-bodyquote mtb-50">
                  <h1>AdSence <br/> Placeholder</h1>
                </blockquote>
              </CCardBody>
            </CCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

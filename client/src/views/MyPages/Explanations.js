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
import { Link } from 'react-router-dom'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Explanations = () => {
    return (
        <div className="home-page">
            <div className="row  mb-5">
                <div className="col-md-7">
                    <CCard accentColor="warning">
                        <CCardHeader> <h4> GRAMMER EXPLANATIONS (LINKS)</h4></CCardHeader>
                        <CCardBody>
                            <ul>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Tenses Forms Cheatsheet</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Present Simpie Form</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Present Continuous Form</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Present Perfect Simple Form</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Present Perfect Continuous Form</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Past Simpie Form</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Past Continuous Form</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Past Perfect Simple Form</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Past Perfect Continuous Form</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Future Simple Form</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Future Continuous Form</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Future Perfect Simple Form</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Future Perfect Continuous Form</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> How to use the verb tenses</Link></li>

                            </ul>
                        </CCardBody>
                        <CCardBody>
                            <CCardHeader> <h4> BASICS </h4></CCardHeader>
                            <ul>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Present Simple 1</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Present Continuous 1</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Present Simple or Present Continuous?</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Present Perfect Simple 1</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Present Perfect or Past Simple 1?</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Present Perfect Continuous 1</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Present Perfect Simple or Present Perfect Continuous?</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Past Simple 1</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Past Continuous 1</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Past Perfect Simple 1</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Past Perfect Continuous 1</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Future Simple 1</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Will or Be Going To?</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Future Continuous 1</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Future Perfect Simple 1</Link></li>
                                <li> <i class="far fa-hand-point-right"></i> <Link to=""> Future Perfect Continuous 1</Link></li>
                            </ul>
                        </CCardBody>

                    </CCard>
                </div>
                <div className="col-md-5">
                    <img src='/images/Home-page.png' />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4" >
                    <div className="col-md-10 offset-md-1">
                        <CCard color="success" className="text-white text-center">
                            <CCardBody className="custom-card-bg" >
                                <blockquote className="card-bodyquote">
                                    <h3>Speak and write more correct, more beautiful English</h3>
                                    <p>Join  my nwesletter and get my new lessons by emal </p>
                                    <p style={{ textTransform: 'capitalize' }}>(also  get my  free  tenses PDFs when you join )</p>
                                    <CInput id="name" placeholder="Your Email Address " required />
                                    <CButton type="submit" size="sm" color="warning" style={{ width: '100%', marginTop: '30px', color: 'white', fontWeight: '600', textTransform: 'capitalize' }}>click  here  to join </CButton>
                                </blockquote>
                            </CCardBody>
                        </CCard>
                    </div>
                </div>

                <div className="col-md-4" >
                    <div className="col-md-10 offset-md-1">
                        <CCard color="success" className="text-white text-center">
                            <CCardBody className="custom-card-bg">
                                <blockquote className="card-bodyquote mtb-50">
                                    <h1>Test your knowledge.</h1>
                                    <CButton type="submit" size="sm" color="warning" style={{ width: '100%', marginTop: '30px', color: 'white', fontWeight: '600', textTransform: 'capitalize' }}>take a free test  </CButton>

                                </blockquote>
                            </CCardBody>
                        </CCard>
                    </div>
                </div>

                <div className="col-md-4" >
                    <div className="col-md-10 offset-md-1">
                        <CCard color="success" className="text-white text-center">
                            <CCardBody className="custom-card-bg">
                                <blockquote className="card-bodyquote mtb-50">
                                    <h1>AdSence <br /> Placeholder</h1>
                                </blockquote>
                            </CCardBody>
                        </CCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explanations

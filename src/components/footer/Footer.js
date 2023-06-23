import React from 'react';
import './Footer.css'

export const Footer = () => {
  const footerContainerStyles = {
    backgroundColor: '#252525',
    paddingTop: '20px',
    paddingBottom: '30px',
    marginBottom: '30px',
    borderBottom: '3px solid #222',
  };

  const mainFooterStyles = {
    padding: '20px 0',
    background: '#252525',
  };

  const widgetStyles = {
    padding: '20px',
    marginBottom: '40px',
  };

  const widgetNoBoxStyles = {
    padding: '0',
    backgroundColor: 'transparent',
    marginBottom: '40px',
    boxShadow: 'none',
    WebkitBoxShadow: 'none',
    MozBoxShadow: 'none',
    MsBoxShadow: 'none',
    OBoxShadow: 'none',
  };

  const widgetTitleStyles = {
    marginBottom: '20px',
  };

  const widgetTitleSpanStyles = {
    background: '#839FAD',
    display: 'block',
    height: '1px',
    marginTop: '25px',
    position: 'relative',
    width: '20%',
  };

  const widgetTitleSpanAfterStyles = {
    background: 'inherit',
    content: '""',
    height: 'inherit',
    position: 'absolute',
    top: '-4px',
    width: '50%',
  };

  const widgetSubscribePStyles = {
    marginBottom: '18px',
  };

  const widgetLiAStyles = {
    color: '#ff8d1e',
  };

  const widgetLiALinkStyles = {
    color: '#4b92dc',
  };

  const btnStyles = {
    backgroundColor: '#ff8d1e',
    color: '#fff',
  };

  const containerStyles = {
    paddingLeft: '0',
    paddingRight: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  };

  const rowStyles = {
    marginLeft: '0',
    marginRight: '0',
  };

  const colStyles = {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingLeft: '15px',
    paddingRight: '15px',
  };

  const colMd3Styles = {
    float: 'left',
    width: '25%',
  };

  const colMd6Styles = {
    float: 'left',
    width: '50%',
  };

  const colMd12Styles = {
    float: 'left',
    width: '100%',
  };

  const ulThumbnailWidgetStyles = {
    listStyle: 'none',
    paddingLeft: '0',
    marginBottom: '0',
  };

  const thumbContentStyles = {
    display: 'block',
    color: '#fff',
  };

  const linkStyles = {
    color: '#ff8d1e',
    "&:hover": {
        color: "blue"
      },
  };

  const btnLinkStyles = {
    color: '#fff',
    textDecoration: 'none',
  };

  const socialFooterStyles = {
    margin: '0',
    padding: '0',
    width: 'auto',
  };

  const socialFooterLiStyles = {
    display: 'inline-block',
    padding: '0',
  };

  const socialFooterLiAStyles = {
    display: 'block',
    height: '30px',
    width: '30px',
    textAlign: 'center',
  };

  const copyRightStyles = {
    background: '#222',
    padding: '5px 0',
  };

  const copyRightContainerStyles = {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '0',
    paddingRight: '0',
    width: '100%',
  };

  const copyRightRowStyles = {
    marginLeft: '0',
    marginRight: '0',
  };

  const copyRightColStyles = {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingLeft: '15px',
    paddingRight: '15px',
  };

  const copyRightTextStyles = {
    color: '#969696',
    margin: '2px 0 0',
  };

  return (
    <div className="footer__container">
      <footer id="footer" className="footer-1">
        <div style={footerContainerStyles} className="main-footer widgets-dark typo-light">
          <div style={containerStyles} className="container">
            <div style={rowStyles} className="row">

              <div style={colMd3Styles} className="col-xs-12 col-sm-6 col-md-3">
                <div style={widgetStyles} className="widget subscribe no-box">
                  <h5 style={widgetTitleStyles} className="widget-title">COMPANY NAME<span style={widgetTitleSpanStyles}></span></h5>
                  <p>About the company, little description will go here..</p>
                </div>
              </div>

              <div style={colMd3Styles} className="col-xs-12 col-sm-6 col-md-3">
                <div style={widgetStyles} className="widget no-box">
                  <h5 style={widgetTitleStyles} className="widget-title">Quick Links<span style={widgetTitleSpanStyles}></span></h5>
                  <ul style={ulThumbnailWidgetStyles} className="thumbnail-widget">
                    <li>
                      <div style={thumbContentStyles} className="thumb-content"><a style={linkStyles} href="#.">Get Started</a></div>
                    </li>
                    <li>
                      <div style={thumbContentStyles} className="thumb-content"><a style={linkStyles} href="#.">Top Leaders</a></div>
                    </li>
                    <li>
                      <div style={thumbContentStyles} className="thumb-content"><a style={linkStyles} href="#.">Success Stories</a></div>
                    </li>
                    <li>
                      <div style={thumbContentStyles} className="thumb-content"><a style={linkStyles} href="#.">Event/Tickets</a></div>
                    </li>
                    <li>
                      <div style={thumbContentStyles} className="thumb-content"><a style={linkStyles} href="#.">News</a></div>
                    </li>
                    <li>
                      <div style={thumbContentStyles} className="thumb-content"><a style={linkStyles} href="#.">Lifestyle</a></div>
                    </li>
                    <li>
                      <div style={thumbContentStyles} className="thumb-content"><a style={linkStyles} href="#.">About</a></div>
                    </li>
                  </ul>
                </div>
              </div>

              <div style={colMd3Styles} className="col-xs-12 col-sm-6 col-md-3">
                <div style={widgetStyles} className="widget no-box">
                  <h5 style={widgetTitleStyles} className="widget-title">Get Started<span style={widgetTitleSpanStyles}></span></h5>
                  <p>Get access to your full Training and Marketing Suite.</p>
                  <a style={btnStyles} className="btn" href="https://bit.ly/3m9avif" target="_blank">Subscribe Now</a>
                </div>
              </div>

              <div style={colMd3Styles} className="col-xs-12 col-sm-6 col-md-3">
                <div style={widgetStyles} className="widget no-box">
                  <h5 style={widgetTitleStyles} className="widget-title">Contact Us<span style={widgetTitleSpanStyles}></span></h5>
                  <p><a style={btnLinkStyles} href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
                  <ul style={socialFooterStyles} className="social-footer2"></ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div style={copyRightStyles} className="footer-copyright">
          <div style={copyRightContainerStyles} className="container">
            <div style={copyRightRowStyles} className="row">
              <div style={copyRightColStyles} className="col-md-12 text-center">
                <p style={copyRightTextStyles}>Copyright Company Name © 2022. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


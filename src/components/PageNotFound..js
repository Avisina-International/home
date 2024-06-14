import React from 'react';
import "../App.css";
import { TiWarningOutline } from "react-icons/ti";

const NotFoundPage = () => {
  return (
    <section className='pagenotfound--section'>
        <div className="pagenotfound--container">
            <div className="warning-icon">
                <TiWarningOutline />
            </div>
            <div className="title">404 Page Not Found</div>
            <div className="message">We're sorry, but the page you were looking for doesn't exist.</div>
        </div>
    </section>
  );
};

export default NotFoundPage;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function Homework() {
  return (
    <div id="homework" className="homeworkContainer">
      <div className="kardContent">
        <div className="kard kard-1">
          <div className="kardImage">
            {/* <a href="/about"> */}
            <img src="/images/uvProductCopyImage.png" alt="UV Product Copy Image"/>
            {/* </a> */}
          </div>
          <div className="kardText">
            <div className="kardHeader">
              Product Copy
            </div>
            <div className="kardBody"></div>
            <div className="kardFooter"></div>
          </div>
        </div>
        <div className="kard kard-2">
          <div className="kardImage"></div>
          <div className="kardText">
            <div className="kardHeader">
              Social Media
            </div>
            <div className="kardBody"></div>
            <div className="kardFooter"></div>
          </div>
        </div>
        <div className="kard kard-3">
          <div className="kardImage"></div>
          <div className="kardText">
            <div className="kardHeader">
              SEO
            </div>
            <div className="kardBody"></div>
            <div className="kardFooter"></div>
          </div>
        </div>
        <div className="kard kard-4">
          <div className="kardImage"></div>
          <div className="kardText">
            <div className="kardHeader">
              Print Copy
            </div>
            <div className="kardBody"></div>
            <div className="kardFooter"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <div className="kardContentHeader">
          Creating captivating content for one of a kind brands.
        </div>
        <div className="kardContentBody">
          <div className="kard kard-1">
            <div className="kardImage">
              <a href="/about">
                <img src="/images/uvProductCopy.png" alt="UV Product Copy Image"/>
              </a>
            </div>
            <div className="kardText">
              <div className="kardHeader">
              Product Copy
              </div>
              <div className="kardBody">
              Product copy with the power to drive sales (and clicks). Through cohesive messaging and SEO research, I help show the world what products have to offer.
              </div>
              <div className="kardFooter"></div>
            </div>
          </div>
          <div className="kard kard-2">
            <div className="kardImage">
              <a href="/about">
                <img src="/images/torridSocialMediaCrop.png" alt="UV Product Copy Image"/>
              </a>
            </div>
            <div className="kardText">
              <div className="kardHeader">
              Social Media
              </div>
              <div className="kardBody">
              Short and effective social media posts that communicate a point and create a brand message.
              </div>
              <div className="kardFooter"></div>
            </div>
          </div>
          <div className="kard kard-3">
            <div className="kardImage">
              <a href="/about">
                <img src="/images/seo.jpg" alt="UV Product Copy Image"/>
              </a>
            </div>
            <div className="kardText">
              <div className="kardHeader">
              SEO
              </div>
              <div className="kardBody">
              Keyword research and structural organization that makes SEO a crucial part of successful sales.  I use different SEO tools to reach optimal visibility.
              </div>
              <div className="kardFooter"></div>
            </div>
          </div>
          <div className="kard kard-4">
            <div className="kardImage">
              <a href="/about">
                <img src="/images/torridPrintCopy.png" alt="UV Product Copy Image"/>
              </a>
            </div>
            <div className="kardText">
              <div className="kardHeader">
              Print Copy
              </div>
              <div className="kardBody">
              Creative collaborations allow email campaigns to be successful. I’ve worked with talented creatives to help launch new collections and products.
              </div>
              <div className="kardFooter"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

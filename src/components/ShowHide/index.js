// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="container app-container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 main-container">
              <div className="text-container">
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLRrH_wT7RwStCNum43bUnEavYBJNISAWhmMJgJWOg=s900-c-k-c0x00ffffff-no-rj"
                  alt="loading"
                  className="image"
                />
                <h1 className="heading">File Not Found</h1>
                <p>
                  Either this file doesn’t exist or you don’t have permission to
                  view it. Ask the file owner to verify the link and/or update
                  permissions.
                </p>
                <button type="button" className="btn">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

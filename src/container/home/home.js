import React, { Component } from 'react'
import Sidebar from '../../components/sidebar/sidebar';
import PageHeader from '../../components/pageheader/pageheader';
import MyInfo from '../../components/myinfo/myinfo';
import Widgets from '../../components/dashboard/widgets';

class home extends Component {
  render() {
    return (
    <div className="app-container app-theme-gray app-sidebar-full">
        <div className="app-main">
        <div class="app-sidebar-overlay d-none animated fadeIn"></div>
        <div class="app-main__outer">
          <div class="app-main__inner p-0">
            <div class="app-inner-layout chat-layout">
            <Sidebar/>
            <PageHeader/>
            <div class="app-inner-layout__wrapper row-fluid no-gutters">
              <MyInfo/>
            </div>
            <div class="app-inner-layout__wrapper row-fluid no-gutters">
            <Widgets/>
            </div>
            </div>
          </div>
        </div>         
        </div>
    </div>
    )
  }
}

export default home

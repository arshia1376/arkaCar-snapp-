 // import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import AboutUs from './page/aboutUS/aboutUS';
import Panel_driver from './page/panel-driver/panel-driver';
import reportWebVitals from './reportWebVitals';
import PanelDriverBox from './page/panel-driver-header/panel-driver-header';
import RegisterDriver from './page/register-driver-level1/input-level1';
import RegisterDriverLevel2 from './page/register-driver-level2/input-level2';
import RegisterDriverLevel3 from './page/register-driver-level3/input-level3';
import RegisterDriverLevel4 from './page/register-driver-level4/input-level4';
import ControlPanel from './page/control-panel/control-panel';
import AutoExpo from './page/AutoExpo/AutoExpo';
import AutoExpoLevel3 from './page/AutoExpo-level3/AutoExpo-level3';
import AutoExpoLevel2 from './page/AutoExpo-level2/AutoExpo-level2';
import Questions from './page/questions/questions';
import ContactUs from './page/contactUs/contactUs';
import BlogNEWS from './page/blogNEWS/blogNEWS';
import Blog from './page/blog/blog';
import SubmitComment from './page/SubmitComment/SubmitComment';
import Index from './page/index/index';
import TabLine from './component/tabLine/tabLine';
import Comments from './component/comments/comments';
import Origin_of_car_application from './page/Origin-of-car-application/Origin-of-car-application';
import Origin_of_car_destination from './page/origin-of-car-Destination/origin-of-car-Destination';
import Origin_of_car_record from './page/Origin-of-car-record/Origin-of-car-record';
import Motor_delivery from './page/motor-delivery/motor-delivery';
import Origin_truck from './page/origin-Truck/origin-Truck';
import Test from './component/test';
import Forsat_shoghli from './page/forsat-shoghli/forsat-shoghli';
import Driver_profile from './page/Driver-profile/Driver-profile';
import Register_travel_order from './page/Register-travel-order/Register-travel-order';
import Register_user from './page/register-user/register-user';
import Loading_search_car from './page/loading-search-car/loading-search-car';
import Motor_deliveryy2 from './page/motor-delivery-page2/motor-delivery-page2';
import Resome_page from './page/resome-page/resome-page';
import PageDriverLocation from './page/page-driver-location/page-driver-location';
import Maa from './page/test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/Driver">
        <RegisterDriver />
      </Route>
      <Route exact path="/pageDriverLocation">
        <PageDriverLocation />
      </Route>
      <Route exact path="/Resome_page">
        <Resome_page />
      </Route>
      <Route exact path="/Maa">
        <Maa />
      </Route>
      <Route exact path="/Forsat_shoghli">
        <Forsat_shoghli />
      </Route>
      <Route exact path="/Motor_deliveryy2">
        <Motor_deliveryy2 />
      </Route>
      <Route exact path="/Panel_driver">
        <Panel_driver />
      </Route>
      <Route exact path="/PanelDriverBox">
        <PanelDriverBox />
      </Route>
      <Route exact path="/Register_user">
        <Register_user />
      </Route>
      <Route exact path="/Loading_search_car">
        <Loading_search_car />
      </Route>
      <Route exact path="/InputLevel1register">
        <RegisterDriverLevel2 />
      </Route>
      <Route exact path="/backLevel1">
        <RegisterDriver />
      </Route>
      <Route exact path="/next-register-level2">
        <RegisterDriverLevel3 />
      </Route>
      <Route exact path="/next-register-level3">
        <RegisterDriverLevel4 />
      </Route>
      <Route exact path="/controlpanel">
        <ControlPanel />
      </Route>
      <Route exact path="/Test">
        <Test />
      </Route>
      <Route exact path="/AboutUs">
        <AboutUs />
      </Route>
      <Route exact path="/AutoExpo">
        <AutoExpo />
      </Route>
      <Route exact path="/AutoExpo-level2">
        <AutoExpoLevel2 />
      </Route>
      <Route exact path="/AutoExpo-level3">
        <AutoExpoLevel3 />
      </Route>
      <Route exact path="/Questions">
        <Questions />
      </Route>
      <Route exact path="/contactUs">
        <ContactUs />
      </Route>
      <Route exact path="/BlogNEWS">
        <BlogNEWS />
      </Route>
      <Route exact path="/SubmitComment">
        <SubmitComment />
      </Route>
      <Route exact path="/Blog">
        <Blog />
      </Route>
      <Route exact path="/">
        <Index />
      </Route>
      <Route exact path="/TabLine">
        <TabLine />
      </Route>
      <Route exact path="/Comments">
        <Comments />
      </Route>
      <Route exact path="/Origin_of_car_application">
        <Origin_of_car_application />
      </Route>
      <Route exact path="/Origin_of_car_destination">
        <Origin_of_car_destination />
      </Route>
      <Route exact path="/Origin_of_car_record">
        <Origin_of_car_record />
      </Route>
      <Route exact path="/Motor_delivery">
        <Motor_delivery />
      </Route>
      <Route exact path="/Origin_truck">
        <Origin_truck />
      </Route>
      <Route exact path="/Driver_profile">
        <Driver_profile />
      </Route>
      <Route exact path="/Register_travel_order">
        <Register_travel_order />
      </Route>
    </Switch>

  </Router>,
  document.getElementById('root')
);
reportWebVitals();
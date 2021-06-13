import ReactDOM from 'react-dom';

import './index.css';
import './style.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
AOS.init();

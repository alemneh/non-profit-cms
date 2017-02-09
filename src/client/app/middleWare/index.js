import { applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import routes from './routes';


export default applyMiddleware(routes, thunk, logger());

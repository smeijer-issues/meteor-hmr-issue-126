import 'babel-polyfill';
import { createApp } from 'mantra-core';
import initContext from './configs/context';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import modules
import coreModule from './modules/core';
import profileModule from './modules/profiles';

// init context
const context = initContext();

// create app
const app = createApp(context);

// load modules
app.loadModule(coreModule);
app.loadModule(profileModule);

// initialize
app.init();

injectTapEventPlugin();

// yes, router must be initialized after the app.
context.Router.initialize();


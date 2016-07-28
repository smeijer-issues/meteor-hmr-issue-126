import React from 'react';
import { mount } from 'react-mounter';
import { AppContainer } from 'react-hot-loader';

import ErrorReporter from '../core/components/error_reporter';

const CONTAINERS = {
  MAIN_LAYOUT: '../core/containers/main_layout',
  PROFILE_LIST: './containers/list',
};

// So we can call Router again later during hot reload
var localRouter;

export default function (injectDeps, { Router }) {
  localRouter = Router;

  const layout = (props) => {
    const Layout = require(CONTAINERS.MAIN_LAYOUT).default;
    const MainLayout = injectDeps(Layout);

    return (
      <AppContainer errorReporter={ErrorReporter}>
        <MainLayout {...props} />
      </AppContainer>
    );
  };

  Router.route('/', {
    name: 'profiles.list',

    action() {
      const ProfileList = require(CONTAINERS.PROFILE_LIST).default;
      mount(layout, {
        content: () => (<ProfileList />),
      });
    },
  });
}

if (module.hot) {
  const files = Object.values(CONTAINERS);

  module.hot.accept(files, function () {
    localRouter._current.route._action(localRouter._current.params);
  });
}


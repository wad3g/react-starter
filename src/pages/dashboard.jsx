import React from 'react';
import { Link } from 'react-router-dom';

import { PageWrapper } from '../styles';

const Page = () => (
  <PageWrapper>
    <p>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p>
      <Link to="/other">Link</Link> to some other page.
    </p>
  </PageWrapper>
);

Page.displayName = 'DashboardPage';

export default Page;

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Loader } from '../../components/helpers';
import {
  userSelector,
  userFetchStateSelector,
  isSignedInSelector,
  tryToShowDonationModal
} from '../../redux';
import DonateModal from '../Donation/DonationModal';
import createRedirect from '../create-redirect';

import './prism.css';
import './prism-night.css';
import 'react-reflex/styles.css';
import './learn.css';

type FetchState = {
  pending: boolean;
  complete: boolean;
  errored: boolean;
};

type User = {
  acceptedPrivacyTerms: boolean;
};

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  (fetchState: FetchState, isSignedIn, user: User) => ({
    fetchState,
    isSignedIn,
    user
  })
);

const mapDispatchToProps = {
  tryToShowDonationModal
};

const RedirectEmailSignUp = createRedirect('/email-sign-up');

type LearnLayoutProps = {
  isSignedIn?: boolean;
  fetchState: FetchState;
  user: User;
  tryToShowDonationModal: () => void;
  children?: React.ReactNode;
};

class LearnLayout extends Component<LearnLayoutProps> {
  static displayName = 'LearnLayout';

  componentDidMount() {
    this.props.tryToShowDonationModal();
  }

  componentWillUnmount() {
    const metaTag = document.querySelector(`meta[name="robots"]`);
    if (metaTag) {
      metaTag.remove();
    }
  }

  render() {
    const {
      fetchState: { pending, complete },
      isSignedIn,
      user: { acceptedPrivacyTerms },
      children
    } = this.props;

    if (pending && !complete) {
      return <Loader fullScreen={true} />;
    }

    if (isSignedIn && !acceptedPrivacyTerms) {
      return <RedirectEmailSignUp />;
    }

    return (
      <>
        <Helmet>
          <meta content='noindex' name='robots' />
        </Helmet>
        <main id='learn-app-wrapper'>{children}</main>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        /* @ts-ignore  */}
        <DonateModal />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnLayout);

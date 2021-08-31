import { Modal, Button, Col, Row } from '@freecodecamp/react-bootstrap';
import { WindowLocation } from '@reach/router';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { goToAnchor } from 'react-scrollable-anchor';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { createSelector } from 'reselect';
import { modalDefaultDonation } from '../../../../config/donation-settings';
import Cup from '../../assets/icons/cup';
import Heart from '../../assets/icons/heart';
import {
  closeDonationModal,
  isDonationModalOpenSelector,
  recentlyClaimedBlockSelector,
  executeGA
} from '../../redux';
import { isLocationSuperBlock } from '../../utils/path-parsers';
import { Spacer } from '../helpers';
import DonateForm from './DonateForm';

import './Donation.css';

const mapStateToProps = createSelector(
  isDonationModalOpenSelector,
  recentlyClaimedBlockSelector,
  (show: boolean, recentlyClaimedBlock: string) => ({
    show,
    recentlyClaimedBlock
  })
);

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      closeDonationModal,
      executeGA
    },
    dispatch
  );

type DonateModalProps = {
  activeDonors: number;
  closeDonationModal: typeof closeDonationModal;
  executeGA: typeof executeGA;
  location: WindowLocation | undefined;
  recentlyClaimedBlock: string;
  show: boolean;
};

function DonateModal({
  show,
  closeDonationModal,
  executeGA,
  location,
  recentlyClaimedBlock
}: DonateModalProps): JSX.Element {
  const [closeLabel, setCloseLabel] = React.useState(false);
  const { t } = useTranslation();
  const handleProcessing = (
    duration: string,
    amount: number,
    action: string
  ) => {
    executeGA({
      type: 'event',
      data: {
        category: 'Donation',
        action: `Modal ${action}`,
        label: duration,
        value: amount
      }
    });
    setCloseLabel(true);
  };

  useEffect(() => {
    if (show) {
      executeGA({ type: 'modal', data: '/donation-modal' });
      executeGA({
        type: 'event',
        data: {
          category: 'Donation View',
          action: `Displayed ${
            recentlyClaimedBlock ? 'block' : 'progress'
          } donation modal`,
          nonInteraction: true
        }
      });
    }
  }, [show, recentlyClaimedBlock, executeGA]);

  const getDonationText = () => {
    const donationDuration = modalDefaultDonation.donationDuration;
    switch (donationDuration) {
      case 'onetime':
        return <b>{t('donate.duration')}</b>;
      case 'month':
        return <b>{t('donate.duration-2')}</b>;
      case 'year':
        return <b>{t('donate.duration-3')}</b>;
      default:
        return <b>{t('donate.duration-4')}</b>;
    }
  };

  const handleModalHide = () => {
    // If modal is open on a SuperBlock page
    if (isLocationSuperBlock(location)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      goToAnchor('claim-cert-block');
    }
  };

  const blockDonationText = (
    <div className=' text-center block-modal-text'>
      <div className='donation-icon-container'>
        <Cup className='donation-icon' />
      </div>
      <Row>
        {!closeLabel && (
          <Col sm={10} smOffset={1} xs={12}>
            <b>{t('donate.nicely-done', { block: recentlyClaimedBlock })}</b>
            <br />
            {getDonationText()}
          </Col>
        )}
      </Row>
    </div>
  );

  const progressDonationText = (
    <div className='text-center progress-modal-text'>
      <div className='donation-icon-container'>
        <Heart className='donation-icon' />
      </div>
      <Row>
        {!closeLabel && (
          <Col sm={10} smOffset={1} xs={12}>
            {getDonationText()}
          </Col>
        )}
      </Row>
    </div>
  );

  return (
    <Modal
      bsSize='lg'
      className='donation-modal'
      onExited={handleModalHide}
      show={show}
    >
      <Modal.Body>
        {recentlyClaimedBlock ? blockDonationText : progressDonationText}
        <Spacer />
        <Row>
          <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
            <DonateForm
              handleProcessing={handleProcessing}
              isMinimalForm={true}
            />
          </Col>
        </Row>
        <Spacer />
        <Row>
          <Col sm={4} smOffset={4} xs={8} xsOffset={2}>
            <Button
              block={true}
              bsSize='sm'
              bsStyle='primary'
              className='btn-link'
              onClick={closeDonationModal}
              tabIndex='0'
            >
              {closeLabel ? t('buttons.close') : t('buttons.ask-later')}
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

DonateModal.displayName = 'DonateModal';

export default connect(mapStateToProps, mapDispatchToProps)(DonateModal);

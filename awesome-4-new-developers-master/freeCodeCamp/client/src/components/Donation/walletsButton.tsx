import {
  PaymentRequestButtonElement,
  Elements,
  ElementsConsumer
} from '@stripe/react-stripe-js';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import type { Token, PaymentRequest } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';
import envData from '../../../../config/env.json';
import { AddDonationData } from './PaypalButton';

const { stripePublicKey }: { stripePublicKey: string | null } = envData;

interface WrapperProps {
  label: string;
  amount: number;
  theme: string;
  postStripeDonation: (
    token: Token,
    payerEmail: string | undefined,
    payerName: string | undefined
  ) => void;
  onDonationStateChange: (donationState: AddDonationData) => void;
  refreshErrorMessage: string;
  handlePaymentButtonLoad: (provider: 'stripe' | 'paypal') => void;
}
interface WalletsButtonProps extends WrapperProps {
  stripe: Stripe | null;
}

const WalletsButton = ({
  stripe,
  label,
  amount,
  theme,
  refreshErrorMessage,
  postStripeDonation,
  onDonationStateChange,
  handlePaymentButtonLoad
}: WalletsButtonProps) => {
  const [token, setToken] = useState<Token | null>(null);
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null
  );
  const [canMakePayment, checkpaymentPossiblity] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const pr = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: { label, amount },
      requestPayerName: true,
      requestPayerEmail: true,
      disableWallets: ['browserCard']
    });

    pr.on('token', event => {
      const { token, payerEmail, payerName } = event;
      setToken(token);
      event.complete('success');
      postStripeDonation(token, payerEmail, payerName);
    });

    void pr.canMakePayment().then(canMakePaymentRes => {
      if (canMakePaymentRes) {
        setPaymentRequest(pr);
        checkpaymentPossiblity(true);
      } else {
        checkpaymentPossiblity(false);
      }
    });
  }, [label, amount, stripe, postStripeDonation, handlePaymentButtonLoad]);

  const displayRefreshError = (): void => {
    onDonationStateChange({
      redirecting: false,
      processing: false,
      success: false,
      error: refreshErrorMessage
    });
  };

  return (
    <form className='wallets-form'>
      {canMakePayment && paymentRequest && (
        <PaymentRequestButtonElement
          onClick={() => {
            console.log('click');
            if (token) {
              displayRefreshError();
            }
          }}
          onReady={() => handlePaymentButtonLoad('stripe')}
          options={{
            style: {
              paymentRequestButton: {
                type: 'default',
                theme: theme === 'night' ? 'light' : 'dark',
                height: '43px'
              }
            },
            paymentRequest
          }}
        />
      )}
    </form>
  );
};

const InjectedCheckoutForm = (props: WrapperProps): JSX.Element => (
  <ElementsConsumer>
    {({ stripe }: { stripe: Stripe | null }) => (
      <WalletsButton stripe={stripe} {...props} />
    )}
  </ElementsConsumer>
);

const WalletsWrapper = (props: WrapperProps): JSX.Element | null => {
  if (!stripePublicKey) {
    return null;
  } else {
    const stripePromise = loadStripe(stripePublicKey);
    return (
      <Elements stripe={stripePromise}>
        <InjectedCheckoutForm {...props} />
      </Elements>
    );
  }
};

export default WalletsWrapper;

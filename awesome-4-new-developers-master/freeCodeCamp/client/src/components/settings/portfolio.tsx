import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from '@freecodecamp/react-bootstrap';
import { findIndex, find, isEqual } from 'lodash-es';
import { nanoid } from 'nanoid';
import React, { Component, FormEvent } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import isURL from 'validator/lib/isURL';

import { hasProtocolRE } from '../../utils';

import { FullWidthRow, ButtonSpacer, Spacer } from '../helpers';
import BlockSaveButton from '../helpers/form/block-save-button';
import SectionHeader from './section-header';

type PortfolioValues = {
  id: string;
  description: string;
  image: string;
  title: string;
  url: string;
};

type PortfolioProps = {
  picture?: string;
  portfolio: PortfolioValues[];
  t: TFunction;
  updatePortfolio: (obj: { portfolio: PortfolioValues[] }) => void;
  username?: string;
};

type PortfolioState = {
  portfolio: PortfolioValues[];
};

function createEmptyPortfolio() {
  return {
    id: nanoid(),
    title: '',
    description: '',
    url: '',
    image: ''
  };
}

function createFindById(id: string) {
  return (p: PortfolioValues) => p.id === id;
}

const mockEvent = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  preventDefault() {}
};

class PortfolioSettings extends Component<PortfolioProps, PortfolioState> {
  static displayName: string;
  constructor(props: PortfolioProps) {
    super(props);

    const { portfolio = [] } = props;

    this.state = {
      portfolio: [...portfolio]
    };
  }

  createOnChangeHandler =
    (id: string, key: 'description' | 'image' | 'title' | 'url') =>
    (e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault();
      const userInput = (e.target as HTMLInputElement).value.slice();
      return this.setState(state => {
        const { portfolio: currentPortfolio } = state;
        const mutablePortfolio = currentPortfolio.slice(0);
        const index = findIndex(currentPortfolio, p => p.id === id);

        mutablePortfolio[index] = {
          ...mutablePortfolio[index],
          [key]: userInput
        };

        return { portfolio: mutablePortfolio };
      });
    };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { updatePortfolio } = this.props;
    const { portfolio } = this.state;
    return updatePortfolio({ portfolio });
  };

  handleAdd = () => {
    return this.setState(state => ({
      portfolio: [createEmptyPortfolio(), ...state.portfolio]
    }));
  };

  handleRemoveItem = (id: string) => {
    return this.setState(
      state => ({
        portfolio: state.portfolio.filter(p => p.id !== id)
      }),
      () => this.handleSubmit(mockEvent as FormEvent<Element>)
    );
  };

  isFormPristine = (id: string) => {
    const { portfolio } = this.state;
    const { portfolio: originalPortfolio } = this.props;
    const original = find(originalPortfolio, createFindById(id));
    if (!original) {
      return false;
    }
    const edited = find(portfolio, createFindById(id));
    return isEqual(original, edited);
  };

  // TODO: Check if this function is required or not
  // isFormValid = id => {
  //   const { portfolio } = this.state;
  //   const toValidate = find(portfolio, createFindById(id));
  //   if (!toValidate) {
  //     return false;
  //   }
  //   const { title, url, image, description } = toValidate;

  //   const { state: titleState } = this.getTitleValidation(title);
  //   const { state: urlState } = this.getUrlValidation(url);
  //   const { state: imageState } = this.getUrlValidation(image, true);
  //   const { state: descriptionState } =
  //     this.getDescriptionValidation(description);
  //   return [titleState, imageState, urlState, descriptionState]
  //     .filter(Boolean)
  //     .every(state => state === 'success');
  // };

  getDescriptionValidation(description: string) {
    const { t } = this.props;
    const len = description.length;
    const charsLeft = 288 - len;
    if (charsLeft < 0) {
      return {
        state: 'error',
        message: t('validation.max-characters', { charsLeft: 0 })
      };
    }
    if (charsLeft < 41 && charsLeft > 0) {
      return {
        state: 'warning',
        message: t('validation.max-characters', { charsLeft: charsLeft })
      };
    }
    if (charsLeft === 288) {
      return { state: null, message: '' };
    }
    return { state: 'success', message: '' };
  }

  getTitleValidation(title: string) {
    const { t } = this.props;
    if (!title) {
      return { state: 'error', message: t('validation.title-required') };
    }
    const len = title.length;
    if (len < 2) {
      return { state: 'error', message: t('validation.title-short') };
    }
    if (len > 144) {
      return { state: 'error', message: t('validation.title-long') };
    }
    return { state: 'success', message: '' };
  }

  getUrlValidation(maybeUrl: string, isImage?: boolean) {
    const { t } = this.props;
    const len = maybeUrl.length;
    if (len >= 4 && !hasProtocolRE.test(maybeUrl)) {
      return { state: 'error', message: t('validation.invalid-protocol') };
    }
    if (isImage && !maybeUrl) {
      return { state: null, message: '' };
    }
    if (isImage && !/\.(png|jpg|jpeg|gif)$/.test(maybeUrl)) {
      return {
        state: 'error',
        message: t('validation.url-not-image')
      };
    }
    return isURL(maybeUrl)
      ? { state: 'success', message: '' }
      : { state: 'warning', message: t('validation.use-valid-url') };
  }

  renderPortfolio = (
    portfolio: PortfolioValues,
    index: number,
    arr: PortfolioValues[]
  ) => {
    const { t } = this.props;
    const { id, title, description, url, image } = portfolio;
    const pristine = this.isFormPristine(id);
    const { state: titleState, message: titleMessage } =
      this.getTitleValidation(title);
    const { state: urlState, message: urlMessage } = this.getUrlValidation(url);
    const { state: imageState, message: imageMessage } = this.getUrlValidation(
      image,
      true
    );
    const { state: descriptionState, message: descriptionMessage } =
      this.getDescriptionValidation(description);

    return (
      <div key={id}>
        <FullWidthRow>
          <form onSubmit={this.handleSubmit}>
            <FormGroup
              controlId={`${id}-title`}
              validationState={
                pristine || (!pristine && !title) ? null : titleState
              }
            >
              <ControlLabel>{t('settings.labels.title')}</ControlLabel>
              <FormControl
                onChange={this.createOnChangeHandler(id, 'title')}
                required={true}
                type='text'
                value={title}
              />
              {titleMessage ? <HelpBlock>{titleMessage}</HelpBlock> : null}
            </FormGroup>
            <FormGroup
              controlId={`${id}-url`}
              validationState={
                pristine || (!pristine && !url) ? null : urlState
              }
            >
              <ControlLabel>{t('settings.labels.url')}</ControlLabel>
              <FormControl
                onChange={this.createOnChangeHandler(id, 'url')}
                required={true}
                type='url'
                value={url}
              />
              {urlMessage ? <HelpBlock>{urlMessage}</HelpBlock> : null}
            </FormGroup>
            <FormGroup
              controlId={`${id}-image`}
              validationState={pristine ? null : imageState}
            >
              <ControlLabel>{t('settings.labels.image')}</ControlLabel>
              <FormControl
                onChange={this.createOnChangeHandler(id, 'image')}
                type='url'
                value={image}
              />
              {imageMessage ? <HelpBlock>{imageMessage}</HelpBlock> : null}
            </FormGroup>
            <FormGroup
              controlId={`${id}-description`}
              validationState={pristine ? null : descriptionState}
            >
              <ControlLabel>{t('settings.labels.description')}</ControlLabel>
              <FormControl
                componentClass='textarea'
                onChange={this.createOnChangeHandler(id, 'description')}
                value={description}
              />
              {descriptionMessage ? (
                <HelpBlock>{descriptionMessage}</HelpBlock>
              ) : null}
            </FormGroup>
            <BlockSaveButton
              disabled={
                pristine ||
                !title ||
                !isURL(url, {
                  protocols: ['http', 'https'],
                  /* eslint-disable camelcase */
                  require_tld: true,
                  require_protocol: true
                  /* eslint-enable camelcase */
                })
              }
            >
              {t('buttons.save-portfolio')}
            </BlockSaveButton>
            <ButtonSpacer />
            <Button
              block={true}
              bsSize='lg'
              bsStyle='danger'
              onClick={() => this.handleRemoveItem(id)}
              type='button'
            >
              {t('buttons.remove-portfolio')}
            </Button>
          </form>
          {index + 1 !== arr.length && (
            <>
              <Spacer />
              <hr />
              <Spacer />
            </>
          )}
        </FullWidthRow>
      </div>
    );
  };

  render() {
    const { t } = this.props;
    const { portfolio = [] } = this.state;
    return (
      <section id='portfolio-settings'>
        <SectionHeader>{t('settings.headings.portfolio')}</SectionHeader>
        <FullWidthRow>
          <div className='portfolio-settings-intro'>
            <p className='p-intro'>{t('settings.share-projects')}</p>
          </div>
        </FullWidthRow>
        <FullWidthRow>
          <ButtonSpacer />
          <Button
            block={true}
            bsSize='lg'
            bsStyle='primary'
            onClick={this.handleAdd}
            type='button'
          >
            {t('buttons.add-portfolio')}
          </Button>
        </FullWidthRow>
        <Spacer size={2} />
        {portfolio.length ? portfolio.map(this.renderPortfolio) : null}
      </section>
    );
  }
}

PortfolioSettings.displayName = 'PortfolioSettings';

export default withTranslation()(PortfolioSettings);

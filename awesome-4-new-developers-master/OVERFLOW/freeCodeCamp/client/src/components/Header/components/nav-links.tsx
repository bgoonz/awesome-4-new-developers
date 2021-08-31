/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
// @ts-nocheck
import {
  faCheck,
  faCheckSquare,
  faHeart,
  faSquare,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import envData from '../../../../../config/env.json';
import {
  availableLangs,
  i18nextCodes,
  langDisplayNames
} from '../../../../../config/i18n/all-langs';
import { updateUserFlag } from '../../../redux/settings';
import createLanguageRedirect from '../../create-language-redirect';
import { Link } from '../../helpers';

const { clientLocale, radioLocation, apiLocation } = envData;

const locales = availableLangs.client;

export interface NavLinksProps {
  displayMenu?: boolean;
  fetchState?: { pending: boolean };
  i18n: Object;
  t: TFunction;
  toggleDisplayMenu?: React.MouseEventHandler<HTMLButtonElement>;
  toggleNightMode: (x: any) => any;
  user?: Record<string, unknown>;
}

const mapDispatchToProps = {
  toggleNightMode: (theme: unknown) => updateUserFlag({ theme })
};

export class NavLinks extends Component<NavLinksProps, {}> {
  static displayName: string;
  toggleTheme(currentTheme = 'default', toggleNightMode: any) {
    toggleNightMode(currentTheme === 'night' ? 'default' : 'night');
  }

  render() {
    const {
      displayMenu,
      i18n,
      fetchState,
      t,
      toggleDisplayMenu,
      toggleNightMode,
      user: { isDonating = false, username, theme }
    }: NavLinksProps = this.props;

    const { pending } = fetchState;
    return pending ? (
      <div className='nav-skeleton' />
    ) : (
      <div className={'nav-list' + (displayMenu ? ' display-menu' : '')}>
        {isDonating ? (
          <div className='nav-link nav-link-flex nav-link-header' key='donate'>
            <span>{t('donate.thanks')}</span>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        ) : (
          <Link className='nav-link' key='donate' sameTab={false} to='/donate'>
            {t('buttons.donate')}
          </Link>
        )}
        {!username && (
          <a
            className='nav-link nav-link-sign-in'
            href={`${apiLocation}/signin`}
            key='signin'
          >
            {t('buttons.sign-in')}
          </a>
        )}
        <Link className='nav-link' key='learn' to='/learn'>
          {t('buttons.curriculum')}
        </Link>
        {username && (
          <Fragment key='profile-settings'>
            <Link
              className='nav-link'
              key='profile'
              sameTab={false}
              to={`/${username}`}
            >
              {t('buttons.profile')}
            </Link>
            <Link
              className='nav-link'
              key='settings'
              sameTab={false}
              to={`/settings`}
            >
              {t('buttons.settings')}
            </Link>
          </Fragment>
        )}
        <hr className='nav-line' />
        <Link
          className='nav-link nav-link-flex'
          external={true}
          key='forum'
          sameTab={false}
          to={t('links:nav.forum')}
        >
          <span>{t('buttons.forum')}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
        <Link
          className='nav-link nav-link-flex'
          external={true}
          key='news'
          sameTab={false}
          to={t('links:nav.news')}
        >
          <span>{t('buttons.news')}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
        <Link
          className='nav-link nav-link-flex'
          external={true}
          key='radio'
          sameTab={false}
          to={radioLocation}
        >
          <span>{t('buttons.radio')}</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Link>
        <hr className='nav-line' />
        <button
          className={
            'nav-link nav-link-flex' + (!username ? ' nav-link-header' : '')
          }
          disabled={!username}
          key='theme'
          onClick={() => this.toggleTheme(String(theme), toggleNightMode)}
        >
          {username ? (
            <>
              <span>{t('settings.labels.night-mode')}</span>
              {theme === 'night' ? (
                <FontAwesomeIcon icon={faCheckSquare} />
              ) : (
                <FontAwesomeIcon icon={faSquare} />
              )}
            </>
          ) : (
            <span className='nav-link-dull'>{t('misc.change-theme')}</span>
          )}
        </button>
        <div className='nav-link nav-link-header' key='lang-header'>
          {t('footer.language')}
        </div>
        {locales.map(lang =>
          // current lang is a button that closes the menu
          i18n.language === i18nextCodes[lang] ? (
            <button
              className='nav-link nav-link-lang nav-link-flex'
              key={'lang-' + lang}
              onClick={toggleDisplayMenu}
            >
              <span>{langDisplayNames[lang]}</span>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          ) : (
            <Link
              className='nav-link nav-link-lang nav-link-flex'
              external={true}
              // Todo: should treat other lang client application links as external??
              key={'lang-' + lang}
              to={createLanguageRedirect({
                clientLocale,
                lang
              })}
            >
              {langDisplayNames[lang]}
            </Link>
          )
        )}
        {username && (
          <Fragment key='signout-frag'>
            <hr className='nav-line-2' />
            <a
              className='nav-link'
              href={`${apiLocation}/signout`}
              key='sign-out'
            >
              {t('buttons.sign-out')}
            </a>
          </Fragment>
        )}
      </div>
    );
  }
}

NavLinks.displayName = 'NavLinks';

export default connect(null, mapDispatchToProps)(withTranslation()(NavLinks));

import React from 'react';

interface noHitsSuggestionPropType {
  handleMouseEnter: (e: React.ChangeEvent<HTMLElement>) => void;
  handleMouseLeave: (e: React.ChangeEvent<HTMLElement>) => void;
  title: string;
}

const NoHitsSuggestion = ({ title }: noHitsSuggestionPropType): JSX.Element => {
  return (
    <div className={'no-hits-footer fcc_suggestion_item'} role='region'>
      <span className='hit-name'>{title}</span>
    </div>
  );
};

export default NoHitsSuggestion;

import { first } from 'lodash-es';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import envData from '../../../../../config/env.json';
import ActionRow from './ActionRow';
import EditorTabs from './EditorTabs';

const { showUpcomingChanges } = envData;

const paneType = {
  flex: PropTypes.number
};

const propTypes = {
  block: PropTypes.string,
  challengeFiles: PropTypes.array,
  editor: PropTypes.element,
  hasEditableBoundries: PropTypes.bool,
  hasPreview: PropTypes.bool,
  instructions: PropTypes.element,
  layoutState: PropTypes.shape({
    codePane: paneType,
    editorPane: paneType,
    instructionPane: paneType,
    previewPane: paneType,
    testsPane: paneType
  }),
  preview: PropTypes.element,
  resizeProps: PropTypes.shape({
    onStopResize: PropTypes.func,
    onResize: PropTypes.func
  }),
  superBlock: PropTypes.string,
  testOutput: PropTypes.element
};

const reflexProps = {
  propagateDimensions: true,
  renderOnResize: true,
  renderOnResizeRate: 20
};

class DesktopLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { showNotes: false, showPreview: true, showConsole: false };
    this.switchDisplayTab = this.switchDisplayTab.bind(this);
  }

  switchDisplayTab(displayTab) {
    this.setState(state => {
      return {
        [displayTab]: !state[displayTab]
      };
    });
  }

  getChallengeFile() {
    const { challengeFiles } = this.props;
    return first(challengeFiles);
  }

  render() {
    const {
      resizeProps,
      instructions,
      editor,
      testOutput,
      hasPreview,
      layoutState,
      preview,
      hasEditableBoundries,
      superBlock,
      block
    } = this.props;

    const { showPreview, showConsole } = this.state;

    const challengeFile = this.getChallengeFile();
    const projectBasedChallenge = showUpcomingChanges && hasEditableBoundries;
    const isPreviewDisplayable = projectBasedChallenge
      ? showPreview && hasPreview
      : hasPreview;
    const isConsoleDisplayable = projectBasedChallenge ? showConsole : true;
    const { codePane, editorPane, instructionPane, previewPane, testsPane } =
      layoutState;

    return (
      <ReflexContainer className='desktop-layout' orientation='horizontal'>
        {projectBasedChallenge && (
          <ActionRow
            block={block}
            switchDisplayTab={this.switchDisplayTab}
            {...this.state}
            superBlock={superBlock}
          />
        )}
        <ReflexElement flex={8} {...reflexProps} {...resizeProps}>
          <ReflexContainer orientation='vertical'>
            {!projectBasedChallenge && (
              <ReflexElement
                flex={instructionPane.flex}
                name='instructionPane'
                {...resizeProps}
              >
                {instructions}
              </ReflexElement>
            )}
            {!projectBasedChallenge && (
              <ReflexSplitter propagate={true} {...resizeProps} />
            )}

            <ReflexElement
              flex={editorPane.flex}
              name='editorPane'
              {...resizeProps}
            >
              {challengeFile &&
                showUpcomingChanges &&
                !hasEditableBoundries && <EditorTabs />}
              {challengeFile && (
                <ReflexContainer
                  key={challengeFile.fileKey}
                  orientation='horizontal'
                >
                  <ReflexElement
                    flex={codePane.flex}
                    name='codePane'
                    {...reflexProps}
                    {...resizeProps}
                  >
                    {editor}
                  </ReflexElement>
                  {isConsoleDisplayable && (
                    <ReflexSplitter propagate={true} {...resizeProps} />
                  )}
                  {isConsoleDisplayable && (
                    <ReflexElement
                      flex={testsPane.flex}
                      name='testsPane'
                      {...reflexProps}
                      {...resizeProps}
                    >
                      {testOutput}
                    </ReflexElement>
                  )}
                </ReflexContainer>
              )}
            </ReflexElement>
            {isPreviewDisplayable && (
              <ReflexSplitter propagate={true} {...resizeProps} />
            )}
            {isPreviewDisplayable && (
              <ReflexElement
                flex={previewPane.flex}
                name='previewPane'
                {...resizeProps}
              >
                {preview}
              </ReflexElement>
            )}
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
    );
  }
}

DesktopLayout.displayName = 'DesktopLayout';
DesktopLayout.propTypes = propTypes;

export default DesktopLayout;

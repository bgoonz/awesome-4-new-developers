import { isEmpty } from 'lodash-es';
import { toSortedArray } from '../../../../../utils/sort-files';

export function getTargetEditor(challengeFiles) {
  if (isEmpty(challengeFiles)) return null;
  else {
    let targetEditor = challengeFiles.find(
      ({ editableRegionBoundaries }) => !isEmpty(editableRegionBoundaries)
    )?.fileKey;

    // fallback for when there is no editable region.
    return targetEditor || toSortedArray(challengeFiles)[0].fileKey;
  }
}

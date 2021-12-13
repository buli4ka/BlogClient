import React from 'react';

import { TYPES } from '../../../../constants/notifications';

import { ReactComponent as WarningIcon } from 'assets/icons/question-mark.svg';
import { ReactComponent as ErrorIcon } from 'assets/icons/warning.svg';
import { ReactComponent as SuccessIcon } from 'assets/icons/check-mark.svg';

const Icon = ({ type, testId = 'notification-icon' }) =>{

  switch (type){
    case TYPES.ERROR:
      return <ErrorIcon data-testid={`${testId}-${type}`} />;
    case TYPES.WARNING:
      return <WarningIcon data-testid={`${testId}-${type}`} />;
    case TYPES.SUCCESS:
      return <SuccessIcon data-testid={`${testId}-${type}`} />;
    default:
      return null;
  }
};

export default Icon;

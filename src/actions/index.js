import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const emailChanged = (text) => {
  console.log('action: emailChange called!');
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  console.log('action: passwordChange called!');
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

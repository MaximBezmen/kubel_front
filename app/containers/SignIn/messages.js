/*
 * SignIn Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SignIn';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Вход!',
  },
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Для авторизации используйте Google аккаунт.',
  },
});

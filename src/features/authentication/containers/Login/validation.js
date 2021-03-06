import { getError } from '@/constants';

export const validate = values => {
    const errors = {};
    const { username, password } = values;

    errors.username = getError(username, ['required', 'emailFormat']);
    errors.password = getError(password, ['required', 'minCharacterRequired'], {
        minCharacter: 8
    });

    return errors;
};

import { Email } from './email.validator';
import { Match } from './group.validator';
import { NoWhiteSpace } from './string.validator';

const CustomValidator = {
    NoWhiteSpace,
    Email,
    Match
};

export { CustomValidator };

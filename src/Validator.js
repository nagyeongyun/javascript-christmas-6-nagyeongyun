import { ERROR_MESSAGES } from './constants/Errors.js';

class Validator {
  static inputDate(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error(ERROR_MESSAGES.date_error);
    }
    if (Number(input) < 1 || Number(input) > 31) {
      throw new Error(ERROR_MESSAGES.date_error);
    }
    if (input.trim() !== input) {
      throw new Error(ERROR_MESSAGES.space_error);
    }
  }
}

export default Validator;

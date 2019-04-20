import { fromJS } from 'immutable';

export default data =>
  fromJS({
    data,
    loaded: false,
    loading: false,
    error: null,
  });

import * as actions from 'actions';

const authInterceptor = ({ dispatch }) => (next) => (action) => {
  if (action.status === 401) {
    dispatch(actions.removeJwt());
  } else {
    next(action);
  }
};
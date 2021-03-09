import produce from 'immer';
import {
  createAgreementAction,
  getPostAction,
  getPostsAction,
} from './actions';
import {
  genericReducer,
  namedEntityParams,
  namedListParams,
} from '../../dataProvider/routineUtils';

export const initialState = {
  posts: namedListParams('posts'),
  post: namedEntityParams('post'),
  agreement: namedEntityParams('agreement'),
};

const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case getPostAction.REQUEST:
      case getPostAction.SUCCESS:
      case getPostAction.FAILURE:
        genericReducer(state, draft, action, initialState.post.name);
        break;
      case getPostsAction.REQUEST:
      case getPostsAction.SUCCESS:
      case getPostsAction.FAILURE:
        genericReducer(state, draft, action, initialState.posts.name);
        break;
      case createAgreementAction.REQUEST:
      case createAgreementAction.SUCCESS:
      case createAgreementAction.FAILURE:
        genericReducer(state, draft, action, initialState.agreement.name);
        break;
      default:
        break;
    }
  });

export default homeReducer;

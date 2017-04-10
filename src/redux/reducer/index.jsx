import Immutable from 'immutable';
import {REQUEST_POSTS, RECEIVE_POSTS, GET_DATA_START, GET_DATA_SUCCESS} from '../action/index';

const defaultState = Immutable.fromJS({data: {}, isFetching: false});


//首次渲染获取数据
export const fetchData = (state = defaultState,action = {}) => {
  switch (action.type){
    case REQUEST_POSTS:
      return state.set('isFetching',true)
    case RECEIVE_POSTS:
      //返回一个新的state
      return Immutable.Map({'data':action.json,'isFetching': false});
    default:
      return state;
  }
};

// 手动获取数据
export const requestData = (state = {},action = {}) => {
  switch (action.type){
    case GET_DATA_START:
      return state
    case GET_DATA_SUCCESS:
      action.success(action.json);
      state[action.name] = action.json;
      return state;
    default:
      return state;
  }
};

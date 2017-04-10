## dispatch
store.dispatch()是 View 发出 Action 的唯一方法。
```
import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
});
```

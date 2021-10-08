//Store
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

//리듀서
// 모듈
import Todo from "./modules/todo";
// 히스토리 가져오기
export const history = createBrowserHistory();
// 리듀서 다 묶어주는 루트리듀서 만들기
const rootReducer = combineReducers({
  todo: Todo,
  router: connectRouter(history), // 커넥트라우터에서 히스토리 가져오게
});

//미들웨어
// 미들웨어 준비하기
const middlewares = [thunk.withExtraArgument({ history: history })]; // 미들웨어에서 히스토리 쓸 수 있도록
// 지금이 어떤 환경인지 알려주기(개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;
// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
// 크롬 확장 프로그램
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// 미들웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//스토어
// 스토어 만들기
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();

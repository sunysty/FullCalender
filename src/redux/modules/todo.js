// todo.js
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";

// 액션
const CREATE_TODO = "CREATE_TODO";
const READ_TODO = "READ_TODO";

//액션생성함수
const createTodo = createAction(CREATE_TODO, () => ({}));
const readTodo = createAction(READ_TODO, () => ({}));

//초기 todo 데이터값
const initialState = {
  list: [],
  done_list: [],
  events: "event",
  date: "",
  time: "",
  done: "false",
};

//FB에서 todo가져오는 함수
const readTodoFB = () => {
  return function (dispatch, getState, { history }) {
    const todoDB = firestore.collection("todo"); //내가 지정한 collection이름

    todoDB.get().then((docs) => {
      //빈배열
      let todo_list = [];

      //todo
      docs.forEach((doc) => {
        let _todo = doc.data();

        let todo = Object.keys(_todo).reduce(
          (acc, cur) => {
            return { ...acc, [cur]: _todo[cur] };
          },
          { id: doc.id }
        );

        todo_list.push(todo);
      });

      dispatch(readTodo(todo_list));
      //todo_list를 읽어오는 액션실행
    });
  };
};

//FB에 todo추가하는 함수
const createTodoFB = () => {
  return function (dispatch, getState, { history }) {
    const todoDB = firestore.collection("todo");
    const _todo = {
      ...initialState,
      events: getState().todo.events,
      date: getState().todo.date,
      time: getState().todo.time,
    };

    console.log(_todo);

    todoDB
      .add({ ..._todo })
      .then((doc) => {
        let todo = { ..._todo, id: doc.id };
        dispatch(createTodo(todo));
        history.replace("/");
      })
      .catch((err) => {
        console.log("에러쓰~");
      });
  };
};

//리듀서
export default handleActions(
  {
    [CREATE_TODO]: (state, action) => produce(state, (draft) => {}),
    [READ_TODO]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//액션들 actionCreator로 묶고 export하기
const actionCreators = {
  createTodo,
  readTodo,
  createTodoFB,
  readTodoFB,
};

export { actionCreators };

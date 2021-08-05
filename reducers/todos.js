import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

const todosReducer = (state = initialState.todoList, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.CREATE_TODO:
        // action.data = string: description
        const newTodo = {
          description: action.data,
          done: false,
          id: uuidv4()
        }
        draft.push(newTodo)
        break;
      case types.UPDATE_TODO:
        // action.data = string: id
        const todo = draft.find((todo) => todo.id === action.data);
        todo.done = !todo.done;
        
        break;
      case types.REMOVE_TODO: 
       // action.data = string: id
       return draft = draft.filter((todo) => todo.id !== action.data);
      case types.REMOVE_COMPLETED:
        return draft = draft.filter((todo) => todo.done !== true);
      default:
        break;

    }
  })
}

export default todosReducer;
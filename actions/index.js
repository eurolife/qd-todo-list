import * as types from './actionTypes';

export const updateTodo = (data) => ({
  type: types.UPDATE_TODO,
  data
})

export const createTodo = (data) => ({
  type: types.CREATE_TODO,
  data,
})

export const removeTodo = (data) => ({
  type: types.REMOVE_TODO,
  data,
})

export const removeCompleted = () => ({
  type: types.REMOVE_COMPLETED
})
export const addTodo = (text) => ({
    type: "ADD_TODO",
    payload: text
})
// in ()i i write the type of data the function is expected to get 
export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: id
})

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    payload: id
})
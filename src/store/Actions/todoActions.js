export const finishTodo = (todo) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();

        firestore.collections('todos').doc(todo.id).set({ done: true }).then(() => {
            dispatch({ type: 'FINISH_TODO_SUCCESS'})
        }).catch(err => {
            dispatch({ type: 'FINISH_TODO_ERROR', err})
        })
    }
}
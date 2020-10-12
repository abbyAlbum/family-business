export const finishTodo = (todo) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('todos').doc(todo.id).set({ ...todo, done: true }).then(() => {
            dispatch({ type: 'FINISH_TODO_SUCCESS'})
        }).catch(err => {
            dispatch({ type: 'FINISH_TODO_ERROR', err})
        })
    }
}
import noteService from '../services/notes'

export const notesInitialized = (id) => {
  return async dispatch => {
    const notes = await noteService.get(id)
    dispatch({
      type:'Notes-Initialized',
      payload: {
        notes
      }
    })
  }
}
export const noteCreated = (note) => {
  return async dispatch => {
    await noteService.create(note)
    dispatch({
      type: 'Note-Created',
      payload: {
        note
      }
    })
  }
}
export const noteShared = (id,sharedWith) => {
  return async dispatch => {
    await noteService.share(id , sharedWith)
    dispatch({
      type: 'Note-Shared',
      payload: {
        id: id,
        sharedWith: sharedWith
      }
    })
  }
}

// export const blogRemoved = (id) => {
//   return async dispatch => {
//     await blogService.deleteBlog(id)
//     dispatch({
//       type: 'Blog-Removed',
//       payload: {
//         id: id
//       }
//     })
//   }
// }
// export const blogUpdated = (likes,id) => {

//   return async dispatch => {
//     await blogService.updateLikes(likes, id)

//     dispatch({
//       type: 'Blog-Updated',
//       payload: {
//         id: id,
//         likes: likes
//       }
//     })
//   }
// }

const NoteReducer = (state=[],action) => {

  switch (action.type){
  case 'Note-Created':
    return [ ...state, action.payload.note]

//   case 'Blog-Removed':
//     return state.filter(blog => blog.id!==action.payload.id)

//   case 'Blog-Updated':
//     return state.map(blog => blog.id===action.payload.id
//       ? { ...blog,likes:action.payload.likes } : blog)

  case 'Notes-Initialized':
    return action.payload.notes

  case 'Note-Shared':
    return state.map(note => note.id===action.payload.id
      ? { ...note, sharedWith:[...note.sharedWith, action.payload.sharedWith] } : note)

  default:
    return state
  }
}

export default NoteReducer
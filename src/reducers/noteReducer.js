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
export const clear = () => {
  return dispatch => {
    dispatch({
      type:'Clear',
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


const NoteReducer = (state=[],action) => {

  switch (action.type){
  case 'Note-Created':
    return [ ...state, action.payload.note]

  case 'Notes-Initialized':
    return action.payload.notes

  case 'Note-Shared':
    return state.map(note => note.id===action.payload.id
      ? { ...note, sharedWith:[...note.sharedWith, action.payload.sharedWith] } : note)
  
  case 'Clear':
    return null

  default:
    return state
  }
}

export default NoteReducer
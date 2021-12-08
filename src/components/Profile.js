import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { notesInitialized } from '../reducers/noteReducer'

const Profile = () =>{
    const dispatch = useDispatch()
    const loggedInUser = useSelector(element => element.LoggedIn)
    const Notes = useSelector(element => element.Notes)

    useEffect(() => {
        console.log('useEffect notes rendering')
        //  const id= useParams().id
        dispatch(notesInitialized(loggedInUser.user.id))
           // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])


return(
<div className="card" style={{width : '18rem'}}>
<ul className="list-group list-group-flush">
    {Notes.map(n=><li key={n.id} className="list-group-item">{n.text}</li>)}
</ul>
</div>
    )
}

export default Profile
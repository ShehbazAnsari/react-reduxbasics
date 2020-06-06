import { FETCH_POSTS, NEW_POST } from '../actions/types'

export const fetchPosts = () => async dispatch =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const responseJson = await response.json()
  return () => dispatch({
    type:FETCH_POSTS,
    payload:responseJson
  })
}
const error = store => next => action => {
   if (action.type === "ERROR"){
       console.log(`error : ${action.payload.description}`)
   }
   else next(action)
}
export default error ;
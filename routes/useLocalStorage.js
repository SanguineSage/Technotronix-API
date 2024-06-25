 const useLocalStorage = (key)=>{
    const deleteItem = ()=>{
        return localStorage.removeItem(key)
    }
    return {setItem, getItem, deleteItem}
 }


 export default useLocalStorage
const deleteItem = deleteLocalStorage("auth-token")
const authenticated= state.accessToken !== null

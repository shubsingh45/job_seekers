import  {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserStart: (state) => {
            state.loading = true
            state.error = null
        },
        fetchUserSuccess: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.error = null
        },
        fetchUserFailure: (state, action) => {
            state.currentUser = null
            state.loading = false
            state.error = action.payload 
        } ,
        RemoveUserSuccess: (state) => {
            state.currentUser = null
            state.loading = false
            state.error = null
        },
        RemoveUserFailure: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.error = null 
        }   
    }
})

export const presentCurrentUser = (state) => state.user.currentUser
export const { fetchUserStart, fetchUserSuccess, fetchUserFailure, RemoveUserFailure, RemoveUserSuccess, RemoveUserStart } = UserSlice.actions

export default UserSlice.reducer

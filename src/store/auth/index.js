import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentAccount: {
        id: 1,
        username: 'bariskabal',
        fullName: 'Barış Kabal',
        avatar: 'https://pbs.twimg.com/profile_images/1532119724515024896/2kcZhkOU_400x400.jpg'
    },
    accounts: [
        {
            id: 1,
            username: 'bariskabal',
            fullName: 'Barış Kabal',
            avatar: 'https://pbs.twimg.com/profile_images/1532119724515024896/2kcZhkOU_400x400.jpg'
        },
        {
            id: 2,
            username: 'bariskabal2',
            fullName: 'Muhammet Kabal',
            avatar: 'https://pbs.twimg.com/profile_images/1532119724515024896/2kcZhkOU_400x400.jpg'
        }
    ]
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //state manipule etme metodları
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id != action.payload)
            if(state.currentAccount && action.payload == state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount : (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const {_addAccount, _removeAccount, _setCurrentAccount} = auth.actions
export default auth.reducer
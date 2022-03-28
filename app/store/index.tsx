import {atom} from 'jotai'

//相当与redux中的store，存所有的状态

export const authInfo = atom({name:""});
export const authToken  = atom("");
export const TokenMananger = atom(
  (get)=>get(authToken),
  (get, set, newToken:string)=>{
    let token = newToken + "loginAgain_" + get(authToken)
    set(authToken, token)
  }
)




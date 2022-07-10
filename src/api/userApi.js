import { get, post } from '../request/http'

let userApi = {
    login : (params) =>{
        return post('/login',params)
    },
	getAllUser:(pageNum)=>{
		return get('/getUser',{'pageNum':pageNum})
	}
}

export default userApi

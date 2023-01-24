import axios from "axios";
import { encodeToken } from "../../../constants/serviceToken";
import { AddLoading, RemoveLoading } from "../../../pages/components/loadingscreen";



// export async function getUserByToken(dataSend) {
//     let url = `${process.env.hostAPI}/ADM/userLoginByToken/`
//     AddLoading()
//     try {
        
//         let res = await axios.post(url, dataSend)
//         let data = res.data
//         RemoveLoading()
//         return data
//     } catch {
//         RemoveLoading()
//         return false
//     }
// }


// export async function getUserLoginByUser(dataSend) {
//     AddLoading()
//     try {
        
//         let res = await axios.post('/api/login/login/getUserLoginByUser', dataSend)
//         console.log(res)
//         RemoveLoading()
//         return res.data
//     } catch (e) {
//         console.log(e)
//         RemoveLoading()
//         return false
//     }
// }

// export async function insToken(dataSend) {
//     let url = `${process.env.hostAPI}/ADM/userAccess/`
//     AddLoading()
//     try {
        
//         let res = await axios.post(url, dataSend)
//         let data = res.data
//         RemoveLoading()
//         return data
//     } catch (err) {
//         console.log(err)
//         RemoveLoading()
//         return false
//     }
// }


// export async function getUserIpAddress() {
//     let url = `https://www.cloudflare.com/cdn-cgi/trace`
//     AddLoading()
//     try {
        
//         let res = await axios.get(url)
//         let data = res.data
//         data = data.trim().split('\n')
//         // console.log(data)
//         let dataObject = new Object()
//         data.forEach(element => {
//             let pair = element.split("=")
//             dataObject[pair[0]] = pair[1]
//         });
//         // console.log(dataObject)
//         RemoveLoading()
//         return dataObject
//     } catch (err) {
//         console.log(err)
//         RemoveLoading()
//         return false
//     }
// }

// export async function getUserEserviceToken() {
//     AddLoading()
//     try {
        
//         let res = await axios.get('/api/login/login/getUserEserviceToken')
//         console.log(res.data)
//         RemoveLoading()
//         return res
//     } catch (e) {
//         console.log(e)
//         RemoveLoading()
//         return false
//     }
// }

// export async function getUserID(Bearer, loginToken) {
//     let dataSend = {
//         Bearer: Bearer,
//         loginToken: loginToken
//     }
//     AddLoading()
//     try {
        
//         let res = await axios.post('/api/login/login/getUserID', dataSend)
//         console.log(res)
//         RemoveLoading()
//         return res
//     } catch (e) {
//         console.log(e)
//         RemoveLoading()
//         return false
//     }
// }


// export async function getUsereServiceData(userid, Bearer) {
//     let dataSend = {
//         Bearer: Bearer,
//         userid: userid
//     }
//     AddLoading()
//     try {
        
//         let res = await axios.post('/api/login/login/getUsereServiceData', dataSend)
//         console.log(res)
//         RemoveLoading()
//         return res
//     } catch (e) {
//         console.log(e)
//         RemoveLoading()
//         return false
//     }
// }

// export async function insLoginEservice(dataSend) {
//     AddLoading()
//     try {
        
//         let res = await axios.post('/api/login/login/insLoginEservice', dataSend)
//         console.log(res)
//         RemoveLoading()
//         return res.data
//     } catch (e) {
//         console.log(e)
//         RemoveLoading()
//         return false
//     }
// }

// export async function getPasswordEncrypt(password) {
//     let DataSend ={
//         password : password
//     }
//     AddLoading()
//     try {
        
//         let res = await axios.post('/api/login/login/getPasswordEncrypt', DataSend)
//         console.log(res)
//         RemoveLoading()
//         return res
//     } catch (e) {
//         console.log(e)
//         RemoveLoading()
//         return false
//     }
// }

// export async function getLoginSSO(uid, upass, sysid, ip) {
//     console.log("getLoginSSO")
//     let dataSend = {
//         uid: uid,
//         upass: upass,
//         sysid: sysid,
//         ip: ip
//     }
//     AddLoading()
//     try {
//         let res = await axios.post('/api/login/login/getLoginSSO', dataSend)
//         console.log(res)
//         RemoveLoading()
//         return res
//     } catch (e) {
//         console.log(e)
//         RemoveLoading()
//         return false
//     }
// }
// export async function getLoginHR(empid) {
//     console.log("getLoginHR")
//     let url = '/api/login/login/getLoginHR/'
//     let DataSend ={
//         empid : empid
//     }
//     AddLoading()
//     try {
        
//         let res = await axios.post(url,DataSend)
//         RemoveLoading()
//         return res.data
//     } catch (e) {
//         console.log(e)
//         RemoveLoading()
//         return false
//     }
// }
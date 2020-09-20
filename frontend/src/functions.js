import axios from "axios"

const baseUrl = process.env.REACT_APP_API_URL || './'

export function getYoutubeIdFromSearch(search) {

    if (!search){
        return []
    }


    return axios.get(baseUrl + 'api/search?q=' + search).then(result => {
        return (result.data)
    })
}

export function authenticateUser(username, password) {
    const postBody = {
        "username": username,
        "password": password
    }

    return axios.post(baseUrl + 'api/users/authenticate', postBody).then(result => {
        return (result)
    }).catch(error => {
        return (error)
    })

}

export function createUser(username, password) {
    const postBody = {
        "username": username,
        "password": password
    }

    return axios.post(baseUrl + 'api/users/create', postBody).then(result => {
        return (result)
    }).catch(error => {
        return (error)
    })

}

export function getGlobalChat(){
    return axios.get(baseUrl + 'api/globalchat').then(result =>{
        return (result)
    }).catch(error =>{
        return (error)
    })
}

export function postGlobalChat(author, content){
    const postBody = {
        "author": author,
        "content": content
    }

    return axios.post(baseUrl + 'api/globalchat', postBody).then(result => {
        return (result)
    }).catch(error => {
        return (error)
    })
}
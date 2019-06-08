import ServiceUtil from './../../Service/serviceUtil';
// import axios from 'axios';
export const GET_USER_LOGGED_IN_CONST = 'GET_USER_LOGGED_IN';


export function getUserLoggedIn(username, password) {
    const data = ServiceUtil.triggerServerRequest({
        'url': `http://localhost:3000/data?username=${username}&password=${password}`,
        'method': "GET"
    });
    console.log('>>>', data);
    return {
        type: GET_USER_LOGGED_IN_CONST,
        payload: data
    };
}
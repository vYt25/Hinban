import store from './store';
import axios from 'axios';

export default class AxiosClass {
    constructor(api, params = null) {
        this.api = api
        this.params = params
        this.token = `Bearer ${store.state.user.token}`

    }

    get() {
        return axios({
            method: 'GET',
            url: this.api,
        })
    }

    getWithToken() {
        return axios({
            method: 'GET',
            url: this.api,
            // data: this.,
            headers: {
                'Authorization': this.token
            }
        })
    }
    post() {
        return axios({
            method: 'POST',
            url: this.api,
            data: this.params
        })
    }

    postWithToken() {
        return axios({
            method: 'POST',
            url: this.api,
            data: this.params,
            headers: {
                'Authorization': this.token
            }
        })
    }

    postWithTokenFormdata() {
        return axios({
            method: 'POST',
            url: this.api,
            data: this.params,
            headers: {
                'Authorization': this.token,
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
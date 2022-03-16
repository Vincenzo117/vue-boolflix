import Vue from 'vue';
import axios from 'axios';

const state = Vue.observable({
    moviesFound: [],
    seriesFound: [],
    filter: "",
    baseURI: "https://api.themoviedb.org/3",
    getMovies() {
        axios
            .get(`${state.baseURI}/search/movie`, {
                params: {
                    api_key: "20fefb6c28c97eabe3d7a5781f7ea9db",
                    query: state.filter,
                },
            })
            .then(res => {
                state.moviesFound = res.data.results;
            })
            .catch(err => {
                console.warn(err.response)
            })
    },
    getSeries() {
        axios
            .get(`${state.baseURI}/search/tv`, {
                params: {
                    api_key: "20fefb6c28c97eabe3d7a5781f7ea9db",
                    query: state.filter,
                },
            })
            .then(res => {
                state.seriesFound = res.data.results;
            })
            .catch(err => {
                console.warn(err.response)
            })
    },
    getItems() {
        if (state.filter != "") {
            this.getMovies();
            this.getSeries();
        } else {
            // Get Trending 
            axios
                .get(`${state.baseURI}/trending/all/day`, {
                    params: {
                        api_key: "20fefb6c28c97eabe3d7a5781f7ea9db",
                    },
                })
                .then(res => {
                    state.moviesFound = res.data.results;
                })
                .catch(err => {
                    console.warn(err.response)
                })
        }
    }
});

export default state;
import Vue from 'vue';
import axios from 'axios';

const state = Vue.observable({
    searchedItems: [],
    filter: "",
    baseURI: "https://api.themoviedb.org/3",
    fetchItems() {
        if (state.filter != "") {

            // Get movies
            axios
                .get(`${state.baseURI}/search/movie`, {
                    params: {
                        api_key: "20fefb6c28c97eabe3d7a5781f7ea9db",
                        query: state.filter,
                    },
                })
                .then(res => {
                    state.searchedItems = res.data.results;
                })
                .catch(err => {
                    console.warn(err.response)
                })

                // Get series
                // .then(function () {
                //     axios
                //         .get(`${state.baseURI}/search/tv`, {
                //             params: {
                //                 api_key: "20fefb6c28c97eabe3d7a5781f7ea9db",
                //                 query: state.filter,
                //             },
                //         })
                //         .then(res => {
                //             state.searchedItems += res.data.results;
                //         })
                //         .catch(err => {
                //             console.warn(err.response)
                //         })
                // }
                // )
        } else {
            // Get Trending 
            axios
                .get(`${state.baseURI}/trending/all/day`, {
                    params: {
                        api_key: "20fefb6c28c97eabe3d7a5781f7ea9db",
                    },
                })
                .then(res => {
                    state.searchedItems = res.data.results;
                })
                .catch(err => {
                    console.warn(err.response)
                })
        }
    },
    getItems() {
        state.fetchItems();
    },
});

export default state;
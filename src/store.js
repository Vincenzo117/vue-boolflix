import Vue from 'vue';
import axios from 'axios';

const state = Vue.observable({
    searchedItems: [],
    filter: "",
    baseURI: "https://api.themoviedb.org/3",
    fetchItems() {
        if (this.filter != "") {
            axios
                .get(`${this.baseURI}/search/movie`, {
                    params: {
                        api_key: "20fefb6c28c97eabe3d7a5781f7ea9db",
                        query: this.filter,
                    },
                })
                .then(res => {
                    state.searchedItems = res.data.results;
                })
                .catch(err => {
                    console.warn(err.response)
                })
        } else {
            state.searchedItems = [];
        }
    },
    searchItems() {
        this.fetchItems();
    },
});

export default state;
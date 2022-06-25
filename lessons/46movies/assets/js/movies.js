const App = {
    data() {
        return {
            API_KEY: '24b1cf11',
            search: 'batman',
            movieList: [],
            movieInfo: {},
            showModal: false,
        }
    },
    methods: {
        searchMovie() {
            if (this.search !== '') {
                axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}`)
                    .then(resp => {
                        this.movieList = resp.data.Search
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
            }
        },
        showMovieInfo() {
            this.showModal = true;
        },
        getMovieInfo(id) {
            axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${id}`)
                .then(resp => {
                    this.movieInfo = resp.data;
                    this.showMovieInfo();
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
    }
}

Vue.createApp(App).mount('#app')
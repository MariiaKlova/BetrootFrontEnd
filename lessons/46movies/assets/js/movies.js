const movieItem = {
    props: ["movie"],
    methods: {
        getMovieInfo(id) {
            // this.$parent.getMovieInfo(id);
            this.$emit("getMovie", id);
        },
        addToFavoriteList(id) {
            // this.$parent.addToFavoriteList(id);
            this.$emit("addToFavoriteList", id);
        }
    },
    template: "#movie_item"
}
const App = {
    data() {
        return {
            API_KEY: '24b1cf11',
            search: 'Batman',
            movieList: [],
            movieInfo: {},
            showModal: false,
            select: "",
            favorite: [],
            findFav: false,
            storage: {}
        }
    },
    created() {
        axios
            .get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=2022`)
            .then(resp => {
                this.movieList = resp.data.Search;
            })
        const local = localStorage.getItem("user_favorites")
        this.storage = JSON.parse(local)

        for (key in this.storage) {
            this.favorite.push(this.storage[key])
        }
    },
    components: {
        movieItem
    },
    methods: {
        searchMovie() {
            if (this.search !== '') {
                axios
                    .get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.select}`)
                    .then(resp => {
                        if (resp.data.Error) {
                            this.showError(resp.data.Error);
                        } else {
                            this.movieList = resp.data.Search;
                            this.search = "";
                        }
                    })
                    .catch(error => {
                        this.showError(error.code);
                        console.log(error.code);
                    })
            } else {
                this.showError('Enter movie title');
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
                .catch(error => {
                    this.showError(error.code)
                })
        },

        addToFavoriteList(id) {
            const index = this.movieList.findIndex((el) => el.imdbID === id)
            const index2 = this.favorite.findIndex((el) => el.imdbID === id)
            if (index2 === -1) {
                let item = this.movieList[index]
                item.inFav = true
                this.favorite.push(item);
            } else {
                this.favorite.splice(index2, 1)
            }

            localStorage.setItem("user_favorites", JSON.stringify(this.favorite));
        },

        movieListWithFavorites() {
            let arr = []
            this.movieList.forEach(el => {
                let findFav = this.favorite.find(item => {
                    return el.imdbID === item.imdbID
                })
                el.inFav = findFav !== undefined ? true : false
                arr.push(el)
            })
            return arr
        },

        showError(text) {
            let html = "";
            html += `
            <div id="err_modal" class="modal_overlay">
                <div class="my_modal">
                        <h3> ! ${text} !</h3>
                </div>
            </div>
            `
            document.body.insertAdjacentHTML("afterbegin", html)

            setTimeout(() => {
                let el = document.querySelector("#err_modal")
                el.remove()
            }, 2000)
        }
    }
}
Vue.createApp(App).mount('#app')
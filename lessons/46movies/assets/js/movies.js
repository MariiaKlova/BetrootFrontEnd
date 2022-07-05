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

const Pagination = {
    props: {
        page: {
            type: Number,
            default: 1,
            required: true
        },
        total: {
            type: Number,
            default: 0,
            required: true
        }
    },
    methods: {
        goToPage(new_page) {
            this.$emit('goToPage', new_page)
        }
    },
    // computed: {
    //     from() {
    //         return from
    //     },
    //     to() {
    //         return to
    //     }
    // },
    template: '#pagination'
}

const App = {
    data() {
        return {
            API_KEY: '24b1cf11',
            search: 'Batman',
            movieList: [],
            movieInfo: {},
            select: "", 
            selectYear: "", 
            favorite: [],
            findFav: false,
            page: 1,
            totalPages: 0,
            perPage: 10,
            showModal: false,
            toggleFavoriteList: false
        }
    },
    created() {
        axios
            .get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=2022`)
            .then(resp => {
                this.movieList = resp.data.Search;
            })


        // this.totalPages = Math.ceil(resp.data.totalResults / 10)
        // document.getElementById('pagination').innerHTML = createPagination(totalPages, 1);
        // createPagination(this.totalPages, this.page)


        // const local = localStorage.getItem("user_favorites")
        this.favorite = JSON.parse(localStorage.getItem("user_favorites")) || []
    },
    components: {
        movieItem,
        Pagination
    },
    methods: {
        searchMovie() {
            if (this.search !== '') {
                axios
                    .get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&y=${this.selectYear}&type=${this.select}&page=${this.page}`)
                    .then(resp => {
                        if (resp.data.Error) {
                            this.showError(resp.data.Error);
                        } else {
                            this.movieList = resp.data.Search;
                            this.totalPages = Math.ceil(resp.data.totalResults / 10)

                            // createPagination(this.totalPages, this.page)
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
        goToPage(new_page) {
            this.page = new_page;
            this.searchMovie()
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
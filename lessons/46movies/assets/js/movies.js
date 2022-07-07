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
    computed: {
        // from() {
        //     return this.page > 2 ? this.page - 2 : 1;
        // },
        // to() {
        //     return this.page < this.total - 2 ? this.page + 2 : this.total;
        // },
        // array() {
        //     return Array.from(Array(this.to + 1).keys()).slice(this.from);
        // },
        arr() {
            return Array.from({
                length: 5
            }, (_, index) => index + this.page - 2);
        },
        arrEnd() {
            return Array.from({
                length: 5
            }, (_, index) => index + this.total - 4);
        }
    },
    template: '#pagination'
}

const Rating = {
    props: {
        source: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
    },
    computed: {
        width() {
            let per = parseFloat(this.value)
            if (this.source === 'Internet Movie Database') {
                per = parseFloat(this.value) * 10
            }
            return { width: `${100-per}%`};

            //* var2 ↓
            // const per = parseInt(eval(this.value.replace("%","/100"))*100);
            // return parseFloat(per);
        }
    },
    template: '#rating'
}

const App = {
    data() {
        return {
            API_KEY: '24b1cf11',
            search: 'The Lord of the Rings',
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
            toggleFavoriteList: false,
            lightTheme: false,
        }
    },
    created() {
        axios
            .get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=The Lord of the Rings&page=${this.page}`)
            .then(resp => {
                this.movieList = resp.data.Search;
                this.totalPages = Math.ceil(resp.data.totalResults / 10)
            })
        this.favorite = JSON.parse(localStorage.getItem("user_favorites")) || [];
        this.lightTheme = (this.getCookie('theme') === 'true');
        // console.log(this.lightTheme);
    },
    components: {
        movieItem,
        Pagination,
        Rating
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
        goToPageMovies(new_page) {
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

        toggleLightTheme() {
            this.lightTheme = !this.lightTheme;
            // document.cookie = encodeURIComponent('theme') + '=' + encodeURIComponent(lightTheme);
            // document.cookie = "theme = " + lightTheme + ";";
            this.createCookie('theme', this.lightTheme, 30)
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
        },

        createCookie(name, value, days) {
            let expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            } else {
                expires = "";
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        },

        getCookie(c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    return unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return "";
        }
    }
}
Vue.createApp(App).mount('#app')
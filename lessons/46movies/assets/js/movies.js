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
            selected: ["movie", "series"],
            select: "movie",
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
                        this.movieList = resp.data.Search;
                        this.search = "";
                    })
                    .catch(error => {
                        this.showError(error.code)
                    })
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
                this.favorite.push(this.movieList[index]);
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

        // showError(text) {
        // let html = "";
        // html += `
        //     <div id="modal_overlay">
        //         <div class="my_modal">
        //             ${text}
        //         </div>
        //     </div>
        //     `
        // document.body.insertAdjacentHTML("afterbegin", html)

        // setTimeout(() {
        //     if (document.getElementById('modal_overlay') !== null) {
        //         document.getElementById('modal_overlay').remove();
        //     }
        // }, 1000)

        //     setTimeout(() =>{
        //         let el = document.querySelector("modal_overlay")
        //         el.classList.add("none")
        //     }, 1000)
        // }


    }
}
Vue.createApp(App).mount('#app')
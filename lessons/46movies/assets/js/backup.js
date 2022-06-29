const App = {
    data() {
        return {
            API_KEY: '24b1cf11',
            search: 'batman',
            movieList: [],
            movieInfo: {},
            showModal: false,
            selected: ["Movie", "Serials"],
            select: "Movie",
            favorite: [],
            storage: {}
        }
    },
    created() {
        const local = localStorage.getItem("user_favorites")
        this.storage = JSON.parse(local)

        for (key in this.storage) {
            this.favorite.push(this.storage[key])
        }
    },
    methods: {
        searchMovie() {
            if (this.search !== '') {
                axios
                    .get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}`)
                    .then(resp => {
                        this.movieList = resp.data.Search;
                        this.search = "";
                    })
                    .catch(error => {
                        this.showError(error.code)
                    })
            } else {
                this.showError("Enter movie title")
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
            if (this.favorite.find((el) => el.imdbID === id) === undefined) {
                this.favorite.push(this.movieList[index]);
                // localStorage.setItem("user_favorites", JSON.stringify(this.favorite))
            }
        },
        // showError(text) {
        //     let html = "";
        //     html += `
        //         <div class="modal_overlay">
        //             <div class="my_modal">
        //                 ${text}
        //             </div>
        //         </div>
        //         `
        //     document.body.insertAdjacentHTML("afterbegin", html)

        //     setTimeout(() =>{
        //         let el = document.querySelector("modal_overlay")
        //         el.classList.add("none")
        //     }, 1000)
        // }

        // favoriteList(){
        // }
    }
}

Vue.createApp(App).mount('#app')
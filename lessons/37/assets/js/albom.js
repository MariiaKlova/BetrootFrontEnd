
    $(function () {
        $('#search_btn').on('click', function () {
            //* за допомогою змінних:
            // const search = $('#search').val();
            // const year = $('#year').val();

            //* за допомогою обєкта для пошуку:
            const objSearch = {
                search: $('#search').val(),
                year: $('#year').val()
            }

            if (search !== '') {
                searchMovies(objSearch).then((response) => {
                    showMovies(response.Search)
                })
                // або 
                // filterMovies(search, year);
            }
        })
    })

    $("body").on('click', ".btn-detail", function () {
        //  або const id = $(this).attr('data-id'); // завжди строка
        const id = $(this).data('id'); // за значенням
        getMovie(id).then(resp => {
            console.log(resp);
        });
    })

    async function getMovie(id) {
        return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(resp => {
                return resp.json();
            })
            .then(resp => {
                return resp;
            })
    }

    //************* fetch ******************* //
    async function searchMovies(objSearch) {
        const { search, year } = objSearch //деструкторизувати обєкт
        let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
        if (year !== '') {
            url += '&y=' + year;
        }
        return fetch(url)
            .then(resp => {
                return resp.json();
            })
            .then(resp => {
                return resp;
            })
    }

    async function filterMovies(search, year = '') {
        const move_list = await searchMovies(search, year);
        console.log(move_list);
        showMovies(move_list.Search);
    }
    // filterMovies();

    function showMovies(movies) {
        let html = '';
        movies.forEach(item => {
            html += `
            <div class="card">
                <img src="${item.Poster}" class="card-img-top" alt="${item.Title}">
                <div class="card-body">
                    <h5 class="card-title">${item.Title}</h5>
                    <p class="card-text">${item.Year}</p>
                    <a href="#" class="btn btn-primary btn-detail" data-id="${item.imdbID}">Detail</a>
                </div>
            </div>`;
        })
        $(".movie_wrap").html(html);
    }
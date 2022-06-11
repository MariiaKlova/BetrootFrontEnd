"use strict";

//* всі змінні мають бути задекларовані в глобальному js, або має бути замикання на сторінках
//* тут АПІ задекларовано в мейн
$(function () {
  $('#search_btn').on('click', function () {
    //* за допомогою змінних:
    // const search = $('#search').val();
    // const year = $('#year').val();
    //* за допомогою обєкта для пошуку:
    var objSearch = {
      search: $('#search').val(),
      year: $('#year').val()
    };

    if (search !== '') {
      searchMovies(objSearch).then(function (response) {
        showMovies(response.Search);
      }); // або 
      // filterMovies(search, year);
    }
  });
});
$("body").on('click', ".btn-detail", function () {
  //  або const id = $(this).attr('data-id'); // завжди строка
  var id = $(this).data('id'); // за значенням

  getMovie(id).then(function (resp) {
    console.log(resp);
  });
});

function getMovie(id) {
  return regeneratorRuntime.async(function getMovie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", fetch("https://www.omdbapi.com/?apikey=".concat(API_KEY, "&i=").concat(id)).then(function (resp) {
            return resp.json();
          }).then(function (resp) {
            return resp;
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
} //************* fetch ******************* //


function searchMovies(objSearch) {
  var search, year, url;
  return regeneratorRuntime.async(function searchMovies$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          search = objSearch.search, year = objSearch.year; //деструкторизувати обєкт

          url = "https://www.omdbapi.com/?apikey=".concat(API_KEY, "&s=").concat(search);

          if (year !== '') {
            url += '&y=' + year;
          }

          return _context2.abrupt("return", fetch(url).then(function (resp) {
            return resp.json();
          }).then(function (resp) {
            return resp;
          }));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function filterMovies(search) {
  var year,
      move_list,
      _args3 = arguments;
  return regeneratorRuntime.async(function filterMovies$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          year = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : '';
          _context3.next = 3;
          return regeneratorRuntime.awrap(searchMovies(search, year));

        case 3:
          move_list = _context3.sent;
          console.log(move_list);
          showMovies(move_list.Search);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
} // filterMovies();


function showMovies(movies) {
  var html = '';
  movies.forEach(function (item) {
    html += "\n            <div class=\"card\">\n                <img src=\"".concat(item.Poster, "\" class=\"card-img-top\" alt=\"").concat(item.Title, "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">").concat(item.Title, "</h5>\n                    <p class=\"card-text\">").concat(item.Year, "</p>\n                    <a href=\"#\" class=\"btn btn-primary btn-detail\" data-id=\"").concat(item.imdbID, "\">Detail</a>\n                </div>\n            </div>");
  });
  $(".movie_wrap").html(html);
}
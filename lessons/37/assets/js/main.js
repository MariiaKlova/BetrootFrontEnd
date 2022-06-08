//* Функція виводу данних в html 
function viewCard(card) {
    let html = '<ul>';
    card.forEach(item => {
        html += `<li><b>${item.name}</b> ${item.qty} - ${item.prise}</li>`
    });
    html += '</ul>'
    document.body.insertAdjacentHTML('afterbegin', html);
}

//***************XMLHttpRequest******************* */
// const xhr = new XMLHttpRequest();
// xhr.overrideMimeType('application/json')
// xhr.open('get', 'assets/data/card.json');
// xhr.send();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(xhr.response);
//             const response = JSON.parse(xhr.response)
//             viewCard(response);
//         } else {
//             alert(xhr.statusText)
//         }
//     }
// }

//*****************fetch************************* */
// fetch('assets/data/card.json')
//     .then(resp => {
//         console.log(resp);
//         return resp.json();
//     })
//     .then(resp => {
//         viewCard(resp);
//     })


//*****************axios library************************* */
//! Потребує <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> у html
// axios('assets/data/card.json')
// .then(resp=>{
//     console.log(resp);
//     viewCard(resp.data);
// })
// .catch(err=>{
//     alert(err.message)
// })


//*****************jQuery library************************* */
// за допомогою options
// $.ajax({
//     url: 'assets/data/card.json',
//     type: 'get',
//     dataType: 'json',
//     success: function (resp) {
//         console.log(resp);
//         viewCard(resp);
//     },
//     error: function (err) {
//         console.log(err);
//         alert(err.statusText);
//     }
// })

// за допомогою methods
// $.ajax('assets/data/card.json')
//     .done((resp) => {
//         viewCard(resp);
//     })
//     .fail((err) => {
//         alert(err.statusText);
//     });

//*********************************** */

function loadPage(page) {
    $.get('pages/' + page + '.html', (html) => {
        $('#page_content').html(html)
    });
}

loadPage('main');

$(function () {
    $('.nav-masthead a').on('click', function (e) {
        e.preventDefault();
        loadPage($(this).attr('href'));
        $('.nav-link.active').removeClass('active');
        $(this).addClass('active');
    })
})
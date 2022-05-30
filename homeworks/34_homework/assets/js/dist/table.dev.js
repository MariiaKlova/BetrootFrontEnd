"use strict";

var style_shit = {
  body: {
    backgroundColor: '#202124',
    color: '#fafafa'
  },
  button: {
    borderRadius: '4px',
    backgroundColor: 'lightcoral',
    color: '#121212',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '20px',
    display: 'flex',
    margin: '20px'
  },
  text_block: {
    width: '200px',
    height: '100px',
    padding: '10px 20px',
    border: '1px solid pink',
    backgroundColor: '#202124',
    color: '#fafafa',
    position: 'relative',
    overflow: 'hidden'
  }
};

function appleStyles(style, el) {
  for (var prop in style) {
    el.style[prop] = style[prop];
  }
}

;
var btn = document.getElementById('btn'); //*********************************** *//

/* Створити HTML-сторінку з великою таблицею. 
При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. 
Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
*/

function sortTable(n) {
  var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
  table = document.getElementById("myTable2");
  switching = true; // Set the sorting direction to ascending:

  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */

  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /* Loop through all table rows (except the
    first, which contains table headers): */

    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true; // Each time a switch is done, increase this count by 1:

      switchcount++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
} //*********************************** *//


appleStyles(style_shit.body, document.body);
appleStyles(style_shit.button, btn);
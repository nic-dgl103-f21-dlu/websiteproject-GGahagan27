'use strict'
//Author: Gillian Gahagan, Navigation JS file for adding navigation to all the Moon's Records Web Pages.  Last Modified: -->

//Created a separate JS file for the navigation using querySelector and innerHTML so we only need one place for the navigation, rather than on all our HTML pages. 
const navEl = document.querySelector("nav");


navEl.innerHTML = `
<ul>
<li><a href="index.html">Home</a> &nbsp;</li>
<li><a href="events.html">Events</a> &nbsp;</li>
<li><a href="new-used-records.html">New and Used Records</a> &nbsp;</li>
<li><a href="skate-shop.html">Skate Shop</a> &nbsp;</li>
<li><a href="shop.html">Shop Moon's</a>&nbsp;</li>
<li><a href="index.html#about">About/Contact</a>&nbsp;</li>
</ul>`


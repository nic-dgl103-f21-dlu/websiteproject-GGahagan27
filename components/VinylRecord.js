//Author: Gillian Gahagan, Events page  for Moon's Records Website. Last Modified: -->
'use strict'
class VinylRecord {
  //created constructor function with two parameters, image and title, which we can update
  constructor(title, imageURL) {
    this.imageURL = imageURL;
    this.title = title;
  }
}

class VinylsComponent {
  //created class vinylsComponent that calls the functions:
  // 'fetchVinyls" which fetches the album cover links, and 'render' which displays the album covers
  constructor() {
    this.fetchVinyls();
    this.render();
  }

  #vinylRecords = []; // private property where we store our record images 

  fetchVinyls() {
    this.#vinylRecords = [
      // vinyl records class requires TWO parameters, 1st -> Vinyl Record Title 2nd -> Vinyl Record ImageURL
      new VinylRecord(
        "David Bowie Hunky Dory album Cover",
        "../images/davidbowie-resized.jpg"
      ), 
      new VinylRecord(
        "Fela Kuti Live in Detroit Album Cover",
        "../images/Fela_resized.jpg"
      ),
      new VinylRecord(
        "Sly and the Family Stone Album cover",
        "../images/buzzcocks_resized.jpg"
      ),
    ];
  }

  render() {  
    const sectionEl = document.getElementById("gallery");//used the "getElementById" method to reference the image gallery. 

    for (let index = 0; index < this.#vinylRecords.length; index++) { //created a for loop that iterates over the array "vinyRecords"  and renders the images 
      const vinyl = this.#vinylRecords[index];
      const vinylEl = document.createElement("img"); //Created the html  element 'img' to insert images in the web page. 
      vinylEl.src = vinyl.imageURL
      vinylEl.alt = vinyl.title
      vinylEl.className = "galleryimg"
      sectionEl.appendChild(vinylEl);//Appended the vinyl element "img" to the the secionEL (Div with the id #gallery)
    }
  }
}

const vinyls = new VinylsComponent();
// events.fetchVinyls() =>  executed in  the in the constructor
// events.render();
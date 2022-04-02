class VinylRecord {
  //created constructor function with two parameters, image and title, which we can update
  constructor(title, imageURL) {
    this.imageURL = imageURL;
    this.title = title;
  }
}

class VinylsComponent {
  //created class vinylsComponent that calls
  constructor() {
    //Created a constructor function with no parameters that (calls two methods?)//Ask Adam about this. Why isn't it "this.fetchVinyl = function()"
    this.fetchVinyls();
    this.render();
  }

  #vinylRecords = []; // private property where we store our events

  fetchVinyls() {
    this.#vinylRecords = [
      new VinylRecord("../images/davidbowie-resized.jpg"), //  "../images/highquadraramblers_resized.jpg",
      new VinylRecord("../images/Fela_resized.jpg"),
      new VinylRecord("../images/buzzcocks_resized.jpg"),
    ];
  }

  render() {
    const sectionEl = document.querySelector(".staffpicks"); //

    for (let index = 0; index < this.#vinylRecords.length; index++) {
      const vinyl = this.#vinylRecords[index];
      const vinylEl = document.createElement("div"); // Created element called div using the DOM.
      vinylEl.className = "album-gallery"; // Created Class using .className
      //Referencing html element to display content using string interpolation.
      vinylEl.innerHTML = `
          <img src="${vinyl.imageURL}" width="400" alt="David Bowie Hunky Dory album Cover" class="galleryimg"> 
          <img src="${vinyl.imageURL}" width="400" alt="Fela Kuti Live in Detroit Album Cover" class="galleryimg">
          <img src="${vinyl.imageURL}" width="400" alt="Sly and the Family Stone Album cover" class="galleryimg"`;
      sectionEl.appendChild(vinylEl);
    }
  }
}

const vinyls = new VinylsComponent();

//TODO Compare Events Js to this file to figure out what do do/Understand what I'm doing.

//Constructor function. Created class  'Event'
//parameters assigned to variables(date, imageUrl, etc)
//this.property assigns 5 parameters) to the variables
//The purpose is to be able to update the elements of the Events section easily in the JS file, rather than the HTML file. 
class MusicEvent {
  constructor(date, imageURL, title, price, description) {
    this.date = date;
    this.imageURL = imageURL;
    this.title = title;
    this.price = price;
    this.description = description;
  }
}
//We've defined an Array named #events -> # means private
//Created a method "fetchEvents()" 
//Created a method "render()"
//Created the array and are passing the value to #events (this.#events)
//Created new event objects that allow us to update the contents in the JS file rather than the HTML file. 
class EventsComponent {
  constructor() {
    this.fetchEvents();
    this.render();
  }

  #musicEvents = []; // private property where we store our events

  fetchEvents() {  //Method that adds the values of our new Music 
    this.#musicEvents = [
      new MusicEvent(
        "SAT, Dec 4, 2021",
        "../images/highquadraramblers_resized.jpg",
        "The High Quadra Ramblers",
        20,
        `Taking their name from a street in Victoria, BC, the High Quadra
        Ramblers bring their inspired take on high-energy music that draws
        influences from their Cape Breton Celtic roots to the West Coast.
        The Ramblers combine celt, bluegrass, ragtime, metis, and classical
        and put their own spin on traditional music.`
      ),
      new MusicEvent(
        "Saturday, Dec 11, 2021",
        "../images/openstage_resized.jpg",
        "Open Stage!",
        0,
        `Got a song in your heart? Got poetry in your soul? Calling all
        musicians, writers, poets, and stand-up comedians. We want to hear
        what you’re working on! Come on out and show us what you’ve got at
        Cumberland’s one and only Open Stage night.`
      ),
    ];
  }

  //created a function "render" retrieved the class .section2
  //Created a for loop that iterates through the array #events
  //Declared a variable named 'eventE1 which we are giving the value of the element "div" (createElement) I believe this creates the entire events section.
  //used variable eventE1.className to pass 'article2' A jeez I don't know how to explain this, but I know what it's doing!
  //eventE1.innerHtml


  render() {
    const sectionEl = document.querySelector(".section2"); // TODO: Change section2 to 'section-music-events. Change it in the HTML, CSS, and on this line.
    for (let index = 0; index < this.#musicEvents.length; index++) {
      const event = this.#musicEvents[index]; //Here we are giving the variable "event" the value of of the "#musicEvents" array.       
      const eventEl = document.createElement("div");//Created a div element to wrap the events section. 
      console.log(event)
    console.log(sectionEl)
      eventEl.className = "article2"; // TODO: Change article2 to "article-music-event" Change it everywhere/see above//Created element called div using the DOM--added class called "article2"(changing name)
      //used .innerHTML to insert HTML for events in the web page using string interpolation. 
      eventEl.innerHTML = `
        <h3>${event.date}</h3>
        <img src="${event.imageURL}" width="400" alt="Photo of the High Quadra Ramblers">
         <h3>${event.title}</h3>
         <p>
          ${event.description}
         </p>
         <h3>Tickets: $${event.price}</h3><!--might change this heading size-->
         <a href="page_6.html"><h3 class="h3">Purchase Tickets</h3></a>  <!--link will open up purchase form page-->
         <!--BUY TICKETS NOW LINK GOES HERE. Don't forget to make pop-up form-->`;
      sectionEl.appendChild(eventEl);//Appending the new event div to the section element. 
    }
    console.log(sectionEl)
  }
}

const events = new EventsComponent();
// events.fetchEvents() =>  executed in  the in the constructor
// events.render();

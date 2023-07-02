// toggle menu in small view
const toggleMenu = () => {
    document.querySelector("#menu").classList.toggle("open");
  };
  
  document.querySelector("#toggleMenu").addEventListener("click", toggleMenu);
  
  /*banner*/
  const monday = "images/monday.webp";
  const tuesday = "images/tuesday.webp";
  const wednesday = "images/wednesday.webp";
  const thursday = "images/thursday.webp";
  const friday = "images/friday.webp";
  const weekend = "images/weekend.webp";
  const today = new Date();
  let dayOfWeek;
  dayOfWeek = today.getDay();
  let message1;
  if (dayOfWeek == 1) {
    message1 =
      "The weather is changing, so should we. - Anonymous ";
    document.querySelector("img").setAttribute("src", monday);
  } else if (dayOfWeek == 2) {
    message1 = "Save bread for May and firewood for April, because you don't know the time to come. - Anonymous ";
    document.querySelector("img").setAttribute("src", tuesday);
  } else if (dayOfWeek == 3) {
    message1 =
      "It is better to read the weather forecast before praying for rain. - Mark Twain.";
    document.querySelector("img").setAttribute("src", wednesday);
  } else if (dayOfWeek == 4) {
    message1 =
      "The sun Opens in a new tab. Is delicious, the rain is refreshing, the wind encourages us, the snow is exhilarating; There really is no such thing as bad weather, just different kinds of good weather.    -   John Ruskin.";
    document.querySelector("img").setAttribute("src", thursday);
  } else if (dayOfWeek == 5) {
    message1 =
      "There is no good weather or bad weather. There is only weather and your attitude towards it. - Louise Hay.";
    document.querySelector("img").setAttribute("src", friday);
  } else {
    message1 =
      "Life is no different than the weather. Not only is it unpredictable, but it shows us a new perspective on the world every day. -Suzy Kasem.";
    document.querySelector("img").setAttribute("src", weekend);
  }
  document.querySelector("#message1").textContent = message1;



/*definitions*/ 
  let info = {
    definitions: [

      "Currently: In general, the term present is used to refer to the set of events that takes place at the moment of speech or to the action presented at that moment.",

      "The Temperature: is a magnitude referred to the notion of measurable heat by means of a thermometer. In physics, it is defined as a scalar magnitude related to the internal energy of a thermodynamic system, defined by the zero principle of thermodynamics.",

      "Humidity: is a measure of the amount of water vapor in the air. Relative humidity, for its part, measures the amount of water in the water in relation to the maximum amount of water vapor (humidity). The higher the temperature, the greater the amount of water vapor the air can hold. Relative humidity is precisely the humidity that they talk about in the weather section.",

      "The climate: is the fluctuating set of atmospheric conditions, characterized by the states and evolutions of the weather, during a period of time and a given place or region, and controlled by the so-called forcing factors, determining factors and by the interaction between the different components of the so-called climate system (atmosphere, hydrosphere, lithosphere, cryosphere, biosphere and anthroposphere)."
    ],

    name: "Luis Andrade",
    email: "and23002@byui.edu",
    github: "landrade0587",
  };
  
  info.definitions.forEach((definitions) => {
    let definitionsElem = document.createElement("li");
    definitionsElem.textContent = definitions;
    document.querySelector("#definitions").appendChild(definitionsElem);
  });
  
  document.querySelector("#name").textContent = info.name;
  document.querySelector("#email").textContent = info.email;
  document.querySelector("#github").textContent = info.github;
  
  /* FOOTER */
  const p_year = document.querySelector("#copyright");
  const year = today.getFullYear();
  
  //Last date accessed code
  const lastmodified = document.querySelector("#lastaccessed");
  const author_name = "Luis Andrade";
  lastmodified.innerHTML = `&copy; ${year} | CSE121B: Final Project | ${author_name} | Last Accessed: ${document.lastModified}`;
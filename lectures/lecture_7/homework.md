## Homework

### Exercise 1: Country Cards and Detail Pages

**Objective:**
Build a React application that fetches and displays a list of countries from an API, shows details for each country when clicked, and allows for searching through the list. Implement a 404 page for handling unknown routes.

**Instructions:**

1. Setup the Application:

   - Create a new React project or use an existing one.
   - Install react-router-dom for routing.

2. Components to Create:

   - `Home`: Display a list of country cards with a search input at the top.
   - `CountryCard`: Display a card for each country showing the flag, region, and population.
   - `CountryDetail`: Display detailed information about a selected country. The flag image just bigger, the name of the country, the capital city of that country, the currency, the google maps link(when clicked it will open the google maps in another tab in the browser), the continent, language and the time zone.
   - `NotFound`: Display a 404 page for unknown routes.

3. API Endpoints:

   - Fetch all countries: https://restcountries.com/v3.1/all?fields=name
   - Fetch a single country by name: https://restcountries.com/v3.1/name/{name}
   - Example: https://restcountries.com/v3.1/name/usa

4. Routing Setup:

   - "/": Display the list of country cards and search input.
   - "/country/": Display details for the selected country.
   - "\*": Catch-all route for 404.

5. Search Functionality:

   - Implement a search input to filter countries based on their names.

6. Styling:
   - Use inline styling or CSS to make the components visually appealing.
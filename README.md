# Welcome to My Pokemon App
***

## Task
The goal of this project is to create a dynamic web application that lists Pokémon fetched from the PokéAPI, displaying each Pokémon’s image, name, and details. The main challenge is to fetch data from an external API, display it efficiently in a grid format, and provide search functionality for users to find specific Pokémon easily. Additionally, the app should support navigation between the Pokémon list and details pages, maintaining a clean and user-friendly interface.


## Description
This Pokémon List App solves the challenge by utilizing React to build a responsive and interactive user interface. The app fetches data from the PokéAPI and displays the first 60 Pokémon in a grid layout. Each Pokémon card shows its name and sprite image. Users can search for specific Pokémon using the search bar, and clicking on a Pokémon card navigates to a detailed view showing its stats and types. The app features pagination-like behavior with a "Previous Page" button, and icons from Font Awesome are used for a modern and clean interface.


## Installation
To install the project, follow these steps:

Clone the repository:
    git clone https://github.com/your-username/my_pokemon_app.git
    cd my_pokemon_app

Install dependencies:

Before running the project, you need to install the required dependencies using npm:
    npm install

Run the application:
    Once the dependencies are installed, you can start the development server:
        npm start
        Also force install FontAwesome Icon cli
            npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons --force

This will run the app in development mode, and it will open in your default browser at http://localhost:3000.


## Usage
Here’s how the Pokémon List App works:

Home Page (localhost:3000):

    The home page displays a list of 60 Pokémon fetched from the PokéAPI.

    You can search for a specific Pokémon using the search bar at the top. The search will filter Pokémon names in real-time.

    Click on any Pokémon card to view its detailed stats (such as base stats and types).

Pokemon Details Page (localhost:3000/pokemon/
):

    The details page displays information about the selected Pokémon, including its stats and types.

    At the bottom of the details page, there is a "Previous Page" button with a backward arrow icon, allowing users to return to the main Pokémon list.


Project Directory Structure:
src/
├── components/
│   ├── PokemonList.js
│   ├── PokemonList.css
│   ├── PokemonCard.js
│   ├── PokemonCard.css
│   ├── PokemonDetail.js
│   ├── PokemonDetail.css
│   └── SearchBar.js
├── App.js
├── App.css
└── index.js



### The Core Team
Nsikan Essoh - Software Engineer


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>

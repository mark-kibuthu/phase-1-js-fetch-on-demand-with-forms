const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      
      // Fetch data based on user input
      const input = document.querySelector("input#searchByID");
      const movieId = input.value;
      
      fetch(`http://localhost:3000/movies/${movieId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Movie not found');
          }
          return response.json();
        })
        .then((data) => {
          // Update UI with fetched data
          const titleElement = document.querySelector("#movieDetails h4");
          const summaryElement = document.querySelector("#movieDetails p");
  
          titleElement.textContent = data.title;
          summaryElement.textContent = data.summary;
        })
        .catch((error) => {
          console.error('Error fetching movie:', error.message);
          // Optionally handle the error in UI
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  
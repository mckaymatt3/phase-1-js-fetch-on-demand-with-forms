

const init = () => {
    // identify the variable
    const inputForm = document.querySelector("form")
    const input = document.querySelector('input#searchByID')
    console.log(inputForm)
    console.log(input)
    // add Event Listener
    inputForm.addEventListener("submit", function (event){
    // preventDefault to Event Object
    event.preventDefault();
    console.log("Prevent Default Stopped")
    // use call back function to submit data to form on page by target to the text box
    console.log(event.target)

    // fetch the data from the server
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data  => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        title.innerText = data.title
        summary.innerText = data.summary
      });
})
}

document.addEventListener('DOMContentLoaded', init);

// function submitData () {
//     const list = document.createElement('li');

//
console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    getJokes();
}

//get all jokes from server and display on DOM
function getJokes(){
    $.ajax({
        url: '/jokes',
        method: 'GET'
    }).then(response =>{
        console.log(response)
        $('#outputDiv').empty();
        for (let joke of response){
            $('#outputDiv').append(`
                <p>By: <span id='whoseJoke'>${joke.whoseJoke}</span></p>
                <p id="questionHere">${joke.jokeQuestion}</p>
                <p id="punchLineHere">${joke.punchLine}</p>
                <p>*****</p> 
            `)
        }
    });
}

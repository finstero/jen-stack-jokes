console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    getJokes();
    $('#addJokeButton').on('click', handleAddJoke);
}

//get all jokes from server and display on DOM
function getJokes(){
    $.ajax({
        url: '/jokes',
        method: 'GET'
    }).then(response =>{
        // console.log(response)

        //empty all jokes from DOM
        $('#outputDiv').empty();

        //loop through all jokes recieved from server and display on DOM
        for (let joke of response){
            $('#outputDiv').append(`
                <p>By: <span>${joke.whoseJoke}</span></p>
                <p>${joke.jokeQuestion}</p>
                <p>${joke.punchLine}</p>
                <p>*****</p> 
            `)
        }
    }).catch (function (error) {
        alert('something went wrong with GET, try again');
    });
} // end getJokes

// creates and sends newJoke object to server
// calls getJokes at the end to append new joke to dom with other jokes at same time
function handleAddJoke(){

    //create newJoke object to send to server
    let newJoke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val()
    }

    //send newJoke object to server at /jokes
    $.ajax({
        url: '/jokes',
        method: 'POST',
        data: newJoke
    }).then(response => {
        console.log('post response', response);
    }).catch (function (error) {
        alert('something went wrong with POST; try again!');
    });

    getJokes();

    //clears inputs
    $('.jokeInput').val('');
} // end handleAddJoke


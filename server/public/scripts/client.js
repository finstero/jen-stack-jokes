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
    });
}

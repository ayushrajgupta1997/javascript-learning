// Nested Scope

function one(){
    const username = "Ayush"

    function two(){
        const chatbot = "Vigor"
        console.log(username); //only child varliables access parents variable
    }
    console.log(chatbot);
    two()
}
one()
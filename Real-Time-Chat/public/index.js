// Include the Socket.IO client library in your HTML file using a <script> tag

// Wrap your code within a function
function initializeChat() {
    const app = document.querySelector(".app");
    const socket = io(); // Corrected variable name

    let uname;

    // Add event listener to join button
    app.querySelector(".join-screen #join-user").addEventListener("click", function() {
        let username = app.querySelector(".join-screen #username").value; // Corrected method to get input value
        socket.emit("newuser", username); // Emit newuser event with username
        uname = username;
        app.querySelector(".join-screen").classList.remove("active");
        app.querySelector(".chat-screen").classList.add("active"); // Corrected selector for chat-screen
    });
}
    app.querySelector("chat-screen #send-message").addEventListener("click",function(){
        let message = app.querySelector("chat-screen #message-input").value;
        if(message.length == 0 ){
            return;
        }
            renderMessage("my",{

            
            username :uname,
            text:message
        })
        
        socket.emit("chat",{
            username :uname,
            text:message
        });
        app.querySelector("chat-screen #message-input").value = "";
    });
    
// Call the function to initialize chat
initializeChat();

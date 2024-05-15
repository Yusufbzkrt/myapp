var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');
var httpRequest = new XMLHttpRequest();

setTimeout(function () {
    chatbotSendMessage("merhaba ben Chatbot size nasıl yardımcı olabilirim");
}, 1000);

function chatbotSendMessage() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var responseText = httpRequest.responseText;
            try {
                var result = JSON.parse(responseText);
                var messageElement = document.createElement('div');
                messageElement.classList.add('chat-message');
                messageElement.classList.add('float-left');
                messageElement.classList.add('shadow-sm');
                messageElement.style.margin = "10px";
                messageElement.style.padding = "5px";
                messageElement.style.clear = "both";
                messageElement.innerHTML = "<span>Chatbot: </span>" +
                    "<span style=" + "margin-top:10px; padding:10px" + ">" + result.response_message + "</span>";
                messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 800 });
                chatContainer.appendChild(messageElement);
            } catch (error) {
                console.log(httpRequest.responseText);
                console.error('Invalid JSON format in server response');
            }
        } else {
            console.error('HTTP request error: ' + httpRequest.status);
        }
    }
}

function sendMessage(messageText) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('user-message');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
    messageElement.style.clear = "both";
    messageElement.innerHTML = "<span>You: </span>" +
        "<span style=" + "margin-top:10px; padding:10px" + ">" + messageText + "</span>";
    messageElement.animate([{ easing: "ease-in", opacity: 0.8 }, { opacity: 1 }], { duration: 500 });
    chatContainer.appendChild(messageElement);
}

function makeRequest(messageText) {
    httpRequest.onreadystatechange = chatbotSendMessage;
    httpRequest.open('GET', 'chatbot.php?message=' + encodeURIComponent(messageText), true);
    httpRequest.send();
}

sendBtn.addEventListener('click', function (e) {
    if (textbox.value === "") {
        alert("boş metin gönderilemez");
    } else {
        var messageText = textbox.value.trim();
        sendMessage(messageText);
        makeRequest(messageText);
        textbox.value = "";
    }
});

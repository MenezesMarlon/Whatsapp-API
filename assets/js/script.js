const inputNumber = document.getElementById('inputNumber');
const inputMessage = document.getElementById('inputMessage');
const button = document.getElementById('sendMessage')

function openLink() {
    let link = 'https://api.whatsapp.com/send/?phone=' + inputNumber.value + '&text=' + encodeURI(inputMessage.value)

    window.open(link)

}
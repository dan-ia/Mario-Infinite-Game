const button = document.querySelector('button');


const play = () => {
    const audio = document.querySelector('audio')
    audio.play()
}

button.addEventListener('click', play)
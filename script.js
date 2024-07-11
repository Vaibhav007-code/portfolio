document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const popupButtons = document.querySelectorAll('.popup-button');
    const closeButtons = document.querySelectorAll('.close');
    const wordsFromMeAudio = document.getElementById('wordsFromMeAudio');
    const pauseAudioBtn = document.getElementById('pauseAudioBtn');

    // Handle popup button clicks
    popupButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-popup-id');
            const modal = document.getElementById(modalId);
            const text = button.getAttribute('data-text');
            if (modal) {
                modal.style.display = 'block';
                if (text) {
                    const modalText = modal.querySelector('#knowMoreText');
                    if (modalText) {
                        modalText.textContent = text;
                    }
                }
            }
        });
    });

    // Handle close button clicks
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Handle window clicks to close modals
    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Animate LinkedIn and Spotify buttons
    const linkedinButton = document.querySelector('.animated-linkedin-button');
    const podcastButton = document.querySelector('.animated-podcast-button');

    if (linkedinButton) {
        linkedinButton.addEventListener('mouseover', () => {
            linkedinButton.classList.add('animated');
        });
        linkedinButton.addEventListener('mouseout', () => {
            linkedinButton.classList.remove('animated');
        });
    }

    if (podcastButton) {
        podcastButton.addEventListener('mouseover', () => {
            podcastButton.classList.add('animated');
        });
        podcastButton.addEventListener('mouseout', () => {
            podcastButton.classList.remove('animated');
        });
    }

    // Handle color switch
    const colorSwitchButton = document.getElementById('colorSwitch');
    colorSwitchButton.addEventListener('click', () => {
        document.body.classList.toggle('duotone');
    });

    // Progress bar
    const progress = document.getElementById('progress');
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progress.style.width = width + '%';
        }
    }, 100);

    // Animated Character Guide (Mascot)
    const mascot = document.createElement('div');
    mascot.classList.add('mascot');
    mascot.innerHTML = '<img src="mascot.png" alt="Mascot">';
    document.body.appendChild(mascot);

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        fetch('https://formspree.io/f/myzgzykq', {  // Updated with your actual Formspree form ID
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        }).then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                alert('Failed to send message.');
            }
        });
    });

    // Play/pause audio on image hover
    const wordsFromMeImage = document.getElementById('wordsFromMeImage');

    if (wordsFromMeImage && wordsFromMeAudio) {
        wordsFromMeImage.addEventListener('mouseover', () => {
            wordsFromMeAudio.play();
        });

        wordsFromMeImage.addEventListener('mouseout', () => {
            wordsFromMeAudio.pause();
        });
    }

    // Play audio by default when the page loads
    if (wordsFromMeAudio) {
        wordsFromMeAudio.play().catch(error => {
            console.log('Autoplay failed:', error);
        });

        pauseAudioBtn.addEventListener('click', () => {
            if (!wordsFromMeAudio.paused) {
                wordsFromMeAudio.pause();
                pauseAudioBtn.textContent = 'Play';
            } else {
                wordsFromMeAudio.play();
                pauseAudioBtn.textContent = 'Pause';
            }
        });
    }
});

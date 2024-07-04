document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const popupButtons = document.querySelectorAll('.popup-button');
    const closeButtons = document.querySelectorAll('.close');

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
});

document.addEventListener('DOMContentLoaded', function() {
    
    // Get all the necessary elements from the page
    const detailButtons = document.querySelectorAll('.details-btn');
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.modal-close-btn');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetails = document.getElementById('modalDetails');

    // Function to open the modal with a smooth animation
    function openModal() {
        modal.classList.add('active');
    }

    // Function to close the modal
    function closeModal() {
        modal.classList.remove('active');
    }

    // Add a click event listener to each "Learn More" button
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the custom data from the button that was clicked
            const title = button.getAttribute('data-title');
            const details = button.getAttribute('data-details');
            
            // Put the project's data into the modal
            modalTitle.textContent = title;
            modalDetails.textContent = details;
            
            // Show the modal
            openModal();
        });
    });

    // Add a click event to the close button (the '×')
    closeBtn.addEventListener('click', closeModal);

    // Add a click event to the dark overlay area to close the modal
    modal.addEventListener('click', (event) => {
        // Only close if the click is on the overlay itself, not the content box
        if (event.target === modal) {
            closeModal();
        }
    });

    // Add a keyboard event to close the modal with the 'Escape' key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

});
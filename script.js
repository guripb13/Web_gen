const submitBtn = document.getElementById('submitBtn');
const rightPanel = document.querySelector('.panel');
const form = document.querySelector('form');
const formContainer = document.querySelector('.form');
const mainContent = document.querySelector('.main-content');

if (form && rightPanel) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent navigation so panel can open
        rightPanel.classList.add('open');
        if (submitBtn) {
            // Add shrink animation to form, then remove button
            if (formContainer) {
                formContainer.classList.add('shrink');
            
            setTimeout(function() {
                submitBtn.remove();
            }, 500); // Remove after animation starts
        }}
        if (mainContent) {
            mainContent.classList.add('to_left');
        }
    });
}
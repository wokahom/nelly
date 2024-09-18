// MODAL JAVASCRIPT STARTS HERE //
        // Get modal element
        var modal = document.getElementById("myModal");

        // Get close button
        var closeModal = document.getElementById("closeModal");

        // Display the modal when the page is loaded
        window.onload = function() {
            modal.style.display = "block";
        }

        // Close the modal when the close button is clicked
        closeModal.onclick = function() {
            modal.style.display = "none";
        }

        // Close the modal when the user clicks outside the modal content
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
// SLIDER JAVASCRIPT ENDS HERE //
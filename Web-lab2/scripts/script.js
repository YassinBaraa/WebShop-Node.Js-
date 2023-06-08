

/*

document.addEventListener('DOMContentLoaded', function() {
    // General counter variable
    let generalCounter = 0;

    // Event listener for product div clicks
    document.body.addEventListener('click', function(event) {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('product')) {
            // Increment the general counter
            generalCounter++;

            // Increment the specific counter for the clicked product
            const productId = clickedElement.dataset.productId;
            const productCounter = document.getElementById('product-counter-' + productId);
            if (productCounter) {
                const currentCount = parseInt(productCounter.textContent);
                productCounter.textContent = currentCount + 1;
            }
        }
    });

    
});*/

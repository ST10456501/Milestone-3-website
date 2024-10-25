


    function calculateTotal() {
        const checkboxes = document.querySelectorAll('.course-checkbox');
        let total = 0;
        let selectedCount = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.dataset.fee);
                selectedCount++;
            }
        });

        // Apply Discount
        let discount = 0;
        if (selectedCount >= 3) {
            discount = total * 0.1; // 10% discount for 3 or more courses
            total -= discount;
        }

        // Update the total price display
        document.querySelector('.total-price').textContent = 'Total Fees: R' + total;

        // Display discount information
        if (discount > 0) {
            document.querySelector('.discount-info').textContent = 'You received a 10% discount! Discount Amount: R' + discount;
        } else {
            document.querySelector('.discount-info').textContent = '';
        }
    }

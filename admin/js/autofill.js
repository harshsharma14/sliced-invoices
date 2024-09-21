jQuery(document).ready(function($) {
    $('#autofill-button').on('click', function(e) {
        e.preventDefault();

        // Get today's date
        var today = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
        $('#payment-date').val(today); // Assuming the input field has this ID

        // Get the total due amount (assuming this is retrievable)
        var totalDueAmount = parseFloat($('#line-items-total').text().trim()); // Replace with actual selector
        $('#payment-amount').val(totalDueAmount); // Assuming the input field has this ID

        // Set payment method to 'Bank'
        $('#payment-method').val('Bank'); // Assuming the select has this ID

        // Get the invoice number
        var invoiceNumber = $('#invoice-number').val(); // Assuming the invoice number input field has this ID
        $('#payment-id').val(invoiceNumber); // Assuming the payment ID input field has this ID

        // Set status to 'Completed'
        $('#payment-status').val('completed'); // Assuming the select has this ID
    });
});

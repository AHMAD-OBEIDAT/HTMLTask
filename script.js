document.addEventListener('DOMContentLoaded', function () {
    // Function to add a row to the table
    function addRow(tableId, rowData) {
        const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        rowData.forEach(data => {
            const newCell = newRow.insertCell();
            const newText = document.createTextNode(data);
            newCell.appendChild(newText);
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = loginForm.elements['username'].value;
            const password = loginForm.elements['password'].value;

            addRow('loginTable', [username, password]);

            loginForm.reset();
        });
    }

    // Handle signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = signupForm.elements['name'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value;

            addRow('signupTable', [name, email, password]);

            signupForm.reset();
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = contactForm.elements['name'].value;
            const email = contactForm.elements['email'].value;
            const phone = contactForm.elements['phone'].value;
            const message = contactForm.elements['message'].value;

            addRow('contactTable', [name, email, phone, message]);

            contactForm.reset();
        });
    }
});

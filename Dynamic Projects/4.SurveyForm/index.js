document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents page refresh

        // Collecting input values
        const nameUser = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;

        // Getting selected radio button value (or null if none selected)
        const selectedRecommendation = document.querySelector('input[name="recommendation"]:checked');
        const recommendationValue = selectedRecommendation ? selectedRecommendation.value : null;

        // Getting select dropdown values
        const selectedRole = document.getElementById('role').value;
        const featureSelected = document.getElementById('favfeat').value;

        // Getting all checked checkboxes
        const improvements = Array.from(document.querySelectorAll('input[name="improvements"]:checked'))
                                 .map(checkbox => checkbox.value);

        // Getting textarea value
        const suggestValue = document.getElementById('suggest').value;

        // Storing collected data as an object
        const userDetail = {
            userName: nameUser,
            userEmail: email,
            userAge: age,
            userRecommend: recommendationValue,
            userRole: selectedRole,
            userFavoriteFeature: featureSelected,
            userImprovements: improvements, // Stored as an array
            userSuggestion: suggestValue,
        };

        // Save data to localStorage
        localStorage.setItem('userDetail', JSON.stringify(userDetail));
        alert('Data has been saved! Thank you for your feedback.');
    });
});

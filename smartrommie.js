// Onboarding Form Submission
document.getElementById('onboardingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cleanliness = document.getElementById('cleanliness').value;
    const pets = document.getElementById('pets').value;
    const socialStyle = document.getElementById('social_style').value;

    // Store preferences (in a real app, this would be sent to a server)
    const preferences = { cleanliness, pets, socialStyle };
    console.log('User  Preferences:', preferences);

    // Show room listing section
    document.getElementById('onboarding').classList.add('hidden');
    document.getElementById('roomListing').classList.remove('hidden');
});

// Room Listing Form Submission
document.getElementById('listingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const roomDescription = document.getElementById('room_description').value;
    const noiseLevel = document.getElementById('noise_level').value;

    // Store listing (in a real app, this would be sent to a server)
    const listing = { roomDescription, noiseLevel };
    console.log('Room Listing:', listing);

    // Show match results section
    document.getElementById('roomListing').classList.add('hidden');
    document.getElementById('matchResults').classList.remove('hidden');

    // Simulate match results
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = `
        <h3 class="font-semibold">Potential Roommates:</h3>
        <ul class="mt-2">
            <li class="border-b py-2">User  1: Clean, No Pets, Social</li>
            <li class="border-b py-2">User  2: Average, Yes Pets, Neutral</li>
            <li class="border-b py-2">User  3: Very Clean, No Pets, Private</li>
        </ul>
    `;
});
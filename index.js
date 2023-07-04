document.addEventListener('DOMContentLoaded', (event) => {
    const shoeList = document.getElementById('shoe-list');

    // Function to fetch shoe data from the JSON file
    const fetchShoes = async () => {
        try {
            const response = await fetch('db.json');
            const data = await response.json();
            const shoes = data.shoes;

            // Render shoe cards
            shoes.forEach((shoe) => {
                renderShoeCard(shoe);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to render a shoe card
    const renderShoeCard = (shoe) => {
        const card = document.createElement('div');
        card.classList.add('shoe-card');

        const image = document.createElement('img');
        image.src = shoe.image;
        image.alt = shoe.name;
        image.classList.add('shoe-image');
        card.appendChild(image);

        const name = document.createElement('h2');
        name.textContent = shoe.name;
        name.classList.add('shoe-name');
        card.appendChild(name);

        const description = document.createElement('p');
        description.textContent = shoe.description;
        description.classList.add('shoe-description');
        card.appendChild(description);

        const votes = document.createElement('p');
        votes.textContent = `Votes: ${shoe.votes}`;
        votes.classList.add('shoe-votes');
        card.appendChild(votes);

        const commentSection = document.createElement('div');
        commentSection.classList.add('comment-section');

        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Leave a comment';
        commentInput.classList.add('comment-input');
        commentSection.appendChild(commentInput);

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Submit';
        commentButton.classList.add('comment-button');
        commentSection.appendChild(commentButton);

        card.appendChild(commentSection);

        shoeList.appendChild(card);
    };

    fetchShoes();
});

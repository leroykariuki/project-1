const shoesContainer = document.getElementById('shoes-container');

// Fetch shoe data from db.json
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        const shoes = data.shoes;
        shoes.forEach(shoe => {
            // Create a shoe card
            const shoeCard = document.createElement('div');
            shoeCard.classList.add('shoe-card');

            // Set shoe image
            const shoeImage = document.createElement('img');
            shoeImage.src = shoe.image;
            shoeCard.appendChild(shoeImage);

            // Set shoe name
            const shoeName = document.createElement('h2');
            shoeName.textContent = shoe.name;
            shoeCard.appendChild(shoeName);

            // Set shoe description
            const shoeDescription = document.createElement('p');
            shoeDescription.textContent = shoe.description;
            shoeCard.appendChild(shoeDescription);

            // Set votes count
            const votesCount = document.createElement('p');
            votesCount.textContent = `Votes: ${shoe.votes}`;
            shoeCard.appendChild(votesCount);

            // Create vote button
            const voteBtn = document.createElement('button');
            voteBtn.classList.add('vote-btn');
            voteBtn.textContent = 'Vote';
            shoeCard.appendChild(voteBtn);

            // Vote button click event handler
            voteBtn.addEventListener('click', () => {
                // Update votes count
                shoe.votes++;
                votesCount.textContent = `Votes: ${shoe.votes}`;

                // Send updated shoe data to the server
                fetch('db.json', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(updatedData => console.log('Shoe data updated:', updatedData))
                .catch(error => console.log('Error updating shoe data:', error));
            });

            // Add shoe card to the container
            shoesContainer.appendChild(shoeCard);
        });
    })
    .catch(error => console.log('Error fetching shoe data:', error));

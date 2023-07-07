document.addEventListener('DOMContentLoaded', function () {
  fetch('db.json')
      .then(response => response.json())
      .then(data => {
          const shoeCardsContainer = document.querySelector('.shoe-card');

          data.shoes.forEach(shoe => {
              const shoeCard = document.createElement('div');
              shoeCard.className = 'shoe-card-item';

              const image = document.createElement('img');
              image.src = shoe.image;
              shoeCard.appendChild(image);

              image.addEventListener('click', function () {
                  const modalOverlay = document.getElementById('modalOverlay');
                  const modalContent = document.getElementById('modalContent');
                  modalContent.innerHTML = '';

                  const name = document.createElement('h3');
                  name.textContent = shoe.name;
                  modalContent.appendChild(name);

                  const price = document.createElement('p');
                  price.textContent = 'Price: ' + shoe.price;
                  modalContent.appendChild(price);

                  const description = document.createElement('p');
                  description.textContent = shoe.description;
                  modalContent.appendChild(description);

                  const votes = document.createElement('p');
                  votes.className = 'votes';
                  votes.textContent = 'Votes: ' + shoe.votes;
                  modalContent.appendChild(votes);

                  const voteButton = document.createElement('button');
                  voteButton.textContent = 'Vote';
                  voteButton.addEventListener('click', function () {
                      const newVotes = shoe.votes + 1;
                      votes.textContent = 'Votes: ' + newVotes;
                      shoe.votes = newVotes;
                  });
                  modalContent.appendChild(voteButton);

                  modalOverlay.style.display = 'block';
              });

              shoeCardsContainer.appendChild(shoeCard);
          });
      });

  const closeButton = document.getElementById('closeButton');
  const modalOverlay = document.getElementById('modalOverlay');

  closeButton.addEventListener('click', function () {
      modalOverlay.style.display = 'none';
  });
});

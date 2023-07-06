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

              const name = document.createElement('h3');
              name.textContent = shoe.name;
              shoeCard.appendChild(name);

              const price = document.createElement('p');
              price.textContent = 'Price: ' + shoe.price;
              shoeCard.appendChild(price);

              const description = document.createElement('p');
              description.textContent = shoe.description;
              shoeCard.appendChild(description);

              const votes = document.createElement('p');
              votes.className = 'votes';
              votes.textContent = 'Votes: ' + shoe.votes;
              shoeCard.appendChild(votes);

              const voteButton = document.createElement('button');
              voteButton.textContent = 'Vote';
              voteButton.addEventListener('click', function () {
                  const newVotes = shoe.votes + 1;
                  votes.textContent = 'Votes: ' + newVotes;
                  shoe.votes = newVotes;
              });
              shoeCard.appendChild(voteButton);

              shoeCardsContainer.appendChild(shoeCard);
          });
      });
});

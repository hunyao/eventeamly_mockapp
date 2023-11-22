let peopleMultiplier = 1; 
let durationMultiplier = 1; 

function updatePrices() {
    document.querySelectorAll('.plan-price').forEach(priceElement => {
        const basePrice = parseInt(priceElement.dataset.basePrice, 10);
        const totalPrice = basePrice * peopleMultiplier * durationMultiplier;
        priceElement.textContent = `${totalPrice}€`;
    });
}

function handlePeopleButtonClick(event) {
    document.querySelectorAll('.people-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    peopleMultiplier = parseInt(event.currentTarget.dataset.multiplier, 10);
    updatePrices();
}

function handleDurationButtonClick(event) {
    document.querySelectorAll('.duration-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    durationMultiplier = parseInt(event.currentTarget.dataset.multiplier, 10);
    updatePrices();
}

function createCard(plan) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-xl p-6 flex flex-col items-center';
    card.style.width = '300px';
    card.style.height = '500px';

    const title = document.createElement('h3');
    title.className = 'text-2xl font-semibold mb-2';
    title.textContent = plan.title;

    const hr = document.createElement('hr');
    hr.className = 'border-t-2 w-full mb-4';

    const ul = document.createElement('ul');
    ul.className = 'text-left w-full mb-6';
    
    plan.features.forEach(feature => {
        const li = document.createElement('li');
        li.className = 'flex items-center mb-2';
        li.innerHTML = `
            <span class="material-symbols-outlined mr-2">
                check
            </span> ${feature.name}
        `;
        ul.appendChild(li);
    });

    const priceButton = document.createElement('div');
    priceButton.className = 'plan-price w-full bg-yellow-400 mt-auto text-sky-700 py-2 px-4 rounded-full text-lg font-bold cursor-pointer hover:bg-sky-700 hover:text-yellow-400';
    priceButton.textContent = plan.price;
    priceButton.dataset.basePrice = plan.price.replace('€', '');

    card.appendChild(title);
    card.appendChild(hr);
    card.appendChild(ul);
    card.appendChild(priceButton);

    return card;
}

function renderCards() {
    const container = document.getElementById('plans-container');
    plansData.forEach(plan => {
        container.appendChild(createCard(plan));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.people-btn').forEach(button => {
        button.addEventListener('click', handlePeopleButtonClick);
    });

    document.querySelectorAll('.duration-btn').forEach(button => {
        button.addEventListener('click', handleDurationButtonClick);
    });

    renderCards(); 
    updatePrices(); 
});



function login() {
    // Simulate login process
    document.getElementById('authButtons').classList.add('hidden');
    document.getElementById('userSection').classList.remove('hidden');
    // You can set the user's name here if needed
    // document.getElementById('userName').textContent = 'Your Logged-In User Name';
    document.getElementById('Login').close();
}

function logout() {
    document.getElementById('userSection').classList.add('hidden');
    document.getElementById('authButtons').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners or other initializations here if needed
});

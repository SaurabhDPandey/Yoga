// script.js
const yogaTypes = [
    { name: "Downward-Facing Dog (Adho Mukha Svanasana)", description: "Strengthens the arms and legs, stretches the back and hamstrings, improves circulation, and helps relieve stress", time: "1 Minutes", image: "images/yoga1.jpg" },
    { name: "Warrior I (Virabhadrasana I) ", description: "Benefits: Strengthens the legs, opens the hips and chest, improves balance, and builds stamina", time: "10 min20 to 30 Sec", image: "images/yoga2.jpg" },
    { name: "Warrior II (Virabhadrasana II)", description: "Benefits: Strengthens the legs and core, improves endurance, opens the hips and chest, and increases stability", time: "1 Minutes", image: "images/yoga3.jpg" },
    { name: "Tree Pose (Vrksasana)", description: "Enhances balance and stability, strengthens the legs and core, and improves concentration and focus", time: "20 to 30 Sec", image: "images/yoga4.jpg" },
    { name: "Child's Pose (Balasana)", description: "Gently stretches the back, hips, and thighs, promotes relaxation, and relieves stress and fatigue", time: "1 Minutes", image: "images/yoga5.jpg" },
    { name: "Bridge Pose (Setu Bandhasana)", description: " Strengthens the back, buttocks, and legs, opens the chest and hips, and can help alleviate lower back pain", time: "1 Minutes", image: "images/yoga6.jpg" },
    { name: "Cobra Pose (Bhujangasana)", description: " Stretches the chest, shoulders, and abdomen, strengthens the spine, and can help alleviate back pain", time: "15 to 30 Sec", image: "images/yoga7.jpg" },
    { name: "Triangle Pose (Trikonasana)", description: "Stretches the legs, hips, and spine, strengthens the legs and core, and improves flexibility and balance", time: "1 Minutes", image: "images/yoga8.jpg" },
    { name: "Plank Pose (Phalakasana)", description: "Strengthens the core, shoulders, arms, and legs, improves stability, and enhances overall endurance", time: "1 Minutes", image: "images/yoga9.jpg" },
    { name: "Seated Forward *Bend (Paschimottanasana)", description: "Stretches the hamstrings, spine, and lower back, improves digestion, and calms* the mind", time: "1 Minutes", image: "images/yoga10.jpg" },
    { name: "Pigeon pose (Eka Pada Rajakapotasana)", description: " Stretches the hips, glutes, and lower back, opens the chest and shoulders, improves flexibility, and can help alleviate sciatic pain", time: "1 Minutes", image: "images/yoga11.jpg" },
    { name: "Legs-Up-The-Wall Pose(Viparita Karani)", description: " Relieves tension in the legs and lower back, improves circulation, reduces stress and anxiety, and promotes relaxation and recovery", time: "1 Minutes", image: "images/yoga12.jpg" },
    
];

const yogaCardsContainer = document.getElementById('yoga-cards');

yogaTypes.forEach(yoga => {
    const card = document.createElement('div');
    card.className = 'col-md-4';
    card.innerHTML = `
        <div class="card">
            <img src="${yoga.image}" alt="${yoga.name}">
            <h5 class="card-title">${yoga.name}</h5>
            <p class="card-description">${yoga.description}</p>
            <button class="card-timer">${yoga.time}</button>
        </div>
    `;
    yogaCardsContainer.appendChild(card);
});

const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
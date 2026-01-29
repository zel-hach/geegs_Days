// ====== Daily Challenge 1

// const solarSystem = [
//   { planet: "Mercury", moons: [] },
//   { planet: "Venus", moons: [] },
//   { planet: "Earth", moons: ["Moon"] },
//   { planet: "Mars", moons: ["Phobos", "Deimos"] },
//   { planet: "Jupiter", moons: ["Io", "Europa", "Ganymede", "Callisto"] },
//   { planet: "Saturn", moons: ["Titan", "Enceladus"] },
//   { planet: "Uranus", moons: ["Titania", "Oberon"] },
//   { planet: "Neptune", moons: ["Triton"] }
// ];

// const section = document.getElementsByClassName("listPlanets");
// solarSystem.map((item) => 
//     {
//         const div = document.createElement("div");
//         const p = document.createElement("p");
//         const dividend = document.createElement("div");
//         dividend.className = "dividend";
//         p.innerText = item.planet;
//         div.appendChild(p);
//         for(let moon of item.moons){
//             const moonDiv =  document.createElement("div");
//             moonDiv.className = "moon";
//             moonDiv.innerText = moon;
//             moonDiv.style.color = "brown";
//             dividend.appendChild(moonDiv);
//         }
//         div.className = "planet";
//         div.classList.add(item.planet.toLowerCase());
//         div.appendChild(dividend);
//         section[0].appendChild(div);
//     });
// ====== Daily Challenge 2

function displayseparatedWords(length){
    let line = '';
    for(let i=0 ; i<length; i++){
        line += '*';
    }
    console.log(line);
}


// ====== Daily Challenge 3

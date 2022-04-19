const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

// Sobre esta lista, realiza lo siguiente:

// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log('\nEjercicio 1');
explorers.forEach(explorer => {
    console.log(explorer.name)
})
// 2. Imprime el stack de cada explorer, usa FOR EACH
console.log('\nEjercicio 2');
explorers.forEach(explorer => {
    console.log('Explorer name: ' + explorer.name)
    explorer.stack.forEach(stack => {
        console.log(stack)
    })
})
// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log('\nEjercicio 3');
let stacks = [];
explorers.map(explorer => {
    explorer.stack.map(stack => stacks.push(stack));
});
console.log(stacks);
// 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log('\nEjercicio 4');
const list = explorers.filter(explorer => explorer.stack.includes('js'));
console.log(list);
// 5. Busca el primer explorer que sea de la CDMX, usa FIND
console.log('\nEjercicio 5');
const found = explorers.find(explorer => explorer.city === 'CDMX');
console.log(found);
// 6. Obtén la suma de todos los exercises_completed, usa REDUCE
console.log('\nEjercicio 6');
const sum = explorers.reduce((valorAnterior, valorActual) => valorAnterior + valorActual.exercises_completed, 0)
console.log(sum);
// 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log('\nEjercicio 7');
const findExplorer = explorers.some(explorer => explorer.missions.frontend.isFinished === true);
console.log(findExplorer);
// 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log('\nEjercicio 8');
const findExplorer2 = explorers.every(explorer => explorer.missions.onboarding.isFinished === true);
console.log(findExplorer2);
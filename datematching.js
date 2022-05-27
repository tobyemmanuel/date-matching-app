class dateMatching {
    constructor(resultContent) { //set variables and collect values
        this.resultContent = resultContent
        //this.iterContent = localStorage.getItem('lastStop')
        this.personAVal = ''
        this.personBVal = ''
        this.place = ''
        this.result = ''
    }

    pickPersonA() { //array for group A names and iterated picking
        let personA = ['James', 'Matt', 'Abel', 'Joseph',
            'Emmanuel', 'Buchi', 'Hammed', 'Kareem',
            'Ronaldo', 'Messi', 'Yemi', 'Christopher',
            'David', 'Tolulope', 'Williams', 'Paul',
            'Folu', 'Tobi', 'Femi', 'Chukwu'
        ]
        let iterContent = sessionStorage.getItem("lastStop")
        let personAB = []
        if (iterContent != null && iterContent.length > 0) personAB = iterContent.split(",")
        if (personAB.length >= personA.length) personAB = []
        if (personAB.length > 0) {
            personAB.forEach(clean)

            function clean(item, index, arr) {
                if (personA.includes(item)) {
                    const indexA = personA.indexOf(item)
                    personA.splice(indexA, 1)
                }
            }
        }
        const randomizerPA = Math.floor(Math.random() * personA.length)
        this.personAVal = personA[randomizerPA]
        personAB.push(this.personAVal)
        sessionStorage.setItem("lastStop", personAB)
        //localStorage.setItem("lastStop", personAB)
    }

    randomPersonB() { // array for group B names and random picking
        const personB = [
            'Amina', 'Beyonce', 'Tiwa', 'Teni',
            'Abigail', 'Mary', 'Rose', 'Elizabeth',
            'Cinderella', 'Emmanuella', 'Sarah', 'Deborah',
            'Ruth', 'Linda', 'Damilola', 'Pelumi',
            'Ngozi', 'Ebube', 'Love', 'Cynthia'
        ]
        const randomizerPB = Math.floor(Math.random() * personB.length)
        this.personBVal = personB[randomizerPB]
    }

    randomPlace() { // array for places and random picking
        const places = [
            'Banana Island, Lagos', 'Elegushi Beach, Lagos', 'Effriel Tower, Paris',
            'Statue of Liberty, New York ', 'Opera House, Sydney', 'Acropolis, Athens',
            'Christ the Redeemer, Rio de Janeiro', 'Stonehenge, United Kingdom', 'Trevi Fountain, Rome',
            'Mt. Kilimanjaro, Tanzania', 'Santorini, Greece', 'Victoria Falls, Zambia',
            'Forbidden City, Beijing', 'Colosseum, Rome', 'Prague Castle, Prague',
            'Burj Khalifa, Dubai', 'Lotte World, Seoul', 'Olumo rock, Abeokuta'
        ]
        const randomizerP = Math.floor(Math.random() * places.length)
        this.place = places[randomizerP]
    }

    showMatch() { //function to combine picked values
        this.pickPersonA()
        this.randomPersonB()
        this.randomPlace()
        this.result = `${this.personAVal} and ${this.personBVal} will be going on a dinner date at ${this.place}`
    }
    updateDisplay() { //function to update element
        this.resultContent.innerText = this.result
    }

}

const resultContent = document.getElementById('result')
const matchDate = new dateMatching(resultContent)

function match() { //refresh application with a button
    matchDate.showMatch()
    matchDate.updateDisplay()
}

window.onload = match; //start code on windows load
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A lifetime of happiness lies ahead of you.", "Believe it can be done.", "Don't just spend time. invest it.", "The night life is for you."]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    createNewPerson: (req, res) => {
        let {name, power} = req.body

        db.push({
            name: name, 
            power: isNaN(+power) ? 1 : +power
        })

        res.send(db)
    },
    deletePerson: (req, res) => {
        let{name} = req.params

        for (let i = 0; i > db.length; i++) {
            if (name === db[i].name) {
                db.splice(i, 1)
            }
        }

        res.send(db)
    },
    incPower: (req, res) => {
        let name = req.query.name

        for (let i = 0; i > db.length; i++) {
            if (name === db[i].name) {
               db[i].power = db[i].power + 100
            }
        }

        res.send(db)
    }
}

const db = [
    {
        name: 'Spencer',
        power: '9000'
    },
    {
        name: 'Cole',
        power: '5000'
    },
]

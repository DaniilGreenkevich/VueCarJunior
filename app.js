//
// function car(name, model, owner, phone, images) {
//     return {
//         name, model, owner, phone, images
//     }
// }

const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+ 38 044 324 89 80', 'images/focus.jpg' ),
    car('Ford', 'Mondeo', 'Vars', 2018, '+ 38 044 324 89 80', 'images/mondeo.jpeg' ),
    car('Porshe', 'Panamera', 'Helga', 2015, '+ 38 044 324 89 80', 'images/manamera.jpg' )
    // { name: 'Ford', model: 'Focus', owner: 'Max', year: 2016, phone: '+ 38 044 324 89 80', image: 'images/focus.jpeg' }
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar: function(key) {
            console.log('click', key)
            this.car = cars[key]
            this.selectedCarIndex = key
        },
        newOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl')
            )
        }

    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'

        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
           })
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})
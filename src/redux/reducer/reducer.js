const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}
export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            let remainingFeatures = []
            let addedFeatures = {}

            state.additionalFeatures.forEach((e) => {
                if (e.id !== action.payload) {
                    remainingFeatures.push(e)
                } else {
                    addedFeatures = e


                }
            })
            return {
                ...state,
                additionalPrice: state.additionalPrice + addedFeatures.price,
                car: {
                    ...state.car,
                    features: [...state.car.features, addedFeatures]
                },
                additionalFeatures: remainingFeatures
            }
        case 'REMOVE_ITEM':
            let keptFeatures = []
            let removedFeature = {}

            state.car.features.forEach((e) => {
                if (e.id !== action.payload) {
                    keptFeatures.push(e)
                } else {
                    removedFeature = e

                }
            })
            return {
                ...state,
                additionalPrice: state.additionalPrice - removedFeature.price,
                car: {
                    ...state.car,
                    features: keptFeatures
                },
                additionalFeatures: [...state.additionalFeatures, removedFeature]
            }
            return state
        default:
            return state
    }
}
const initialState = [
    {
        id: 0,
        capacity: 17.5,
        gas: 1.5,
        distance: 200,
        pilotAvailability: true,
        vehicleAvailability: true,
        depreciation: 0.10,
        load: "entrega de paquetes",
    },
    {
        id: 1,
        capacity: 18.5,
        gas: 1.7,
        distance: 300,
        pilotAvailability: true,
        vehicleAvailability: true,
        depreciation: 0.15,
        load: "refrigeración",
    },
    {
        id: 2,
        capacity: 19.5,
        gas: 1.3,
        distance: 350,
        pilotAvailability: false,
        vehicleAvailability: true,
        depreciation: 0.12,
        load: "mudanza",
    },
];

const truckReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TRUCK":
            state = [...state, action.payload]
            return state;
        case "UPDATE_TRUCK":
            const updateState = state.map((truck) => truck.id === action.payload.id ? action.payload: truck);
            state = updateState;
            return state;
        case "DELETE_TRUCK":
            const filterTrucks = state.filter((truck) => truck.id !== action.payload && truck);
            state = filterTrucks;
            return state;
        default: 
            return state;
        
    }
};

export default truckReducer;
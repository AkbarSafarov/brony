import { makeAutoObservable } from "mobx";

export interface IService {
    id: number;
    name: string;
    position: number[];
    availableTimes: string[];
    rating: number;
}

interface Services {
    [key: string]: IService[];
}

class SalonStore {
    mapCenter = [41.2995, 69.2401]; // Координаты центра Ташкента
    zoom = 13;
    employees: Services = {
        nails: [
            {
                id: 1,
                name: "John Doe",
                position: [41.2995, 69.2401],
                availableTimes: ["10:00", "12:00", "14:00"],
                rating: 3.8,
            },
            {
                id: 2,
                name: "Jane Roe",
                position: [41.3055, 69.2551],
                availableTimes: ["11:00", "13:00", "15:00"],
                rating: 4.9,
            }
        ],
        hairdresser: [
            {
                id: 3,
                name: "Mary Smith",
                position: [41.3105, 69.2701],
                availableTimes: ["09:00", "11:00", "13:00"],
                rating: 5,
            }
        ],
        eyelashes: [
            {
                id: 4,
                name: "Alice Johnson",
                position: [41.3155, 69.2851],
                availableTimes: ["10:00", "12:00", "14:00"],
                rating: 4.5
            }
        ]
    };
    selectedCategory = "nails";
    selectedEmployee = null;

    constructor() {
        makeAutoObservable(this);
    }

    selectCategory(category: any) {
        this.selectedCategory = category;
    }

    selectEmployee(employee: any) {
        this.selectedEmployee = employee;
    }
}

const salonStore = new SalonStore();
export default salonStore;
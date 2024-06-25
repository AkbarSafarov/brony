import { makeAutoObservable } from "mobx";
import BaseModel from "../TypeModel";

class SalonStore extends BaseModel{
    mapCenter = [51.505, -0.09];
    zoom = 13;
    employees = {
        hairdressers: [
            {
                id: 1,
                name: "John Doe",
                position: [51.505, -0.09],
                availableTimes: ["10:00", "12:00", "14:00"]
            },
            {
                id: 2,
                name: "Jane Roe",
                position: [51.51, -0.1],
                availableTimes: ["11:00", "13:00", "15:00"]
            }
        ],
        manicurists: [
            {
                id: 3,
                name: "Mary Smith",
                position: [51.515, -0.09],
                availableTimes: ["09:00", "11:00", "13:00"]
            }
        ],
        skincareSpecialists: [
            {
                id: 4,
                name: "Alice Johnson",
                position: [51.52, -0.1],
                availableTimes: ["10:00", "12:00", "14:00"]
            }
        ]
    };
    selectedCategory = "hairdressers";
    selectedEmployee = null;

    constructor() {
        super();
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
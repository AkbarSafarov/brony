import { makeAutoObservable } from "mobx";

class RegistrationStore {
    currentStep = 1;
    phoneNumber = "";
    verificationCode = "";
    userDetails = {
        logo: null as File | null,
        firstName: "",
        lastName: "",
        address: "",
    };
    selectedService = "";
    services: string[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    setVerificationCode(verificationCode: string) {
        this.verificationCode = verificationCode;
    }

    setUserDetails(details: Partial<typeof this.userDetails>) {
        this.userDetails = { ...this.userDetails, ...details };
    }

    setSelectedService(service: string) {
        this.selectedService = service;
    }

    addService(service: string) {
        this.services.push(service);
    }

    nextStep() {
        this.currentStep += 1;
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep -= 1;
        }
    }
}

export const registrationStore = new RegistrationStore();

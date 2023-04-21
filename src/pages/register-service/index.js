import React, { useState } from 'react';
import RegisterOwner from '../register-owner';
import RegisterMap from '../register-map';
import RegisterCheck from '../register-check';
import Servicio from '@/components/registerService/Servicio';
import RegisterCara from '../register-cara';
export default function RegisterService() {

    const [establishment, setEstablishment] = useState({

        steps: 1,
        image: null,
        owner: {
          name: null,
          surNames: null,
          dni: null,
          gender: 2,
          nationality: 10,
          tramitNumber: null,
          birthDate: "0001-01-01T00:00:00",
          phoneCode: null,
          phoneNumber: null,
          maritalStatus: 5,
          pep: false
        },
        categoryId: "00000000-0000-0000-0000-000000000000",
        name: null,
        address: null,
        latitude: null,
        longitude: null,
        phoneNumber: null,
        openingTime: null,
        closingTime: null,
        webSite: null,
        requestedDate: "2023-04-19T16:27:48.3928111-03:00",
        requestStatus: 0,
        userId: null,
        accessibilityIds: null
  
    });

    const handleNextStep = () => {

        setEstablishment({...establishment, steps: establishment.steps + 1});

    }

    let currentStep;

    if(establishment.steps === 1){

        return <Servicio handleNextStep={handleNextStep} establishment={establishment} setEstablishment={setEstablishment}/>

    } else if (establishment.steps === 2) {

        return <RegisterOwner handleNextStep={handleNextStep} establishment={establishment} setEstablishment={setEstablishment}/>

    } else if(establishment.steps === 3) {

        return <RegisterCara handleNextStep={handleNextStep} establishment={establishment} setEstablishment={setEstablishment}/>

    } else if(establishment.steps === 4) {

        return <RegisterMap handleNextStep={handleNextStep} establishment={establishment} setEstablishment={setEstablishment}/>

    } else if(establishment.steps === 5) {

        return <RegisterCheck handleNextStep={handleNextStep} establishment={establishment} setEstablishment={setEstablishment}/>

    } else {

        currentStep = <div>Paso desconocido</div>

    }

    return (
        <>
                
            {currentStep}
                
        </>
    )
}


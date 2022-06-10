import { useState, useEffect } from "react";
import {Pet} from '../../@types/Pets';
import { Api } from "../../services/Api";
import {AxiosError} from'axios';

export const useIndex = () =>{
    const [listPets, setListPets] = useState<Pet[]>([]),
    [selectedPet, setSelectedPet] = useState<Pet | null>(null),
    [email, setEmail] = useState(''),
    [message, setMessage] = useState(''),
    [value, setValue] = useState('');

    useEffect(() =>{
        Api.get('/pets')
        .then((response) => {setListPets(response.data)})
    },[])

    useEffect(() =>{
        if(selectedPet === null){
            clearFields()
        }
    },[selectedPet])

    const adopt = () =>{
        if(selectedPet !== null){
            if(validateAdoptionData()){
                Api.post('/adocoes', {
                    pet_id: selectedPet.id,
                    email: email,
                    valor: value

                })
                .then(() => {
                    setSelectedPet(null);
                    setMessage('Pet adotado com sucesso')
                })
                .catch((error: AxiosError<any>) => {
                    setMessage(error.response?.data.message)
                })
            }else{
                setMessage('Preenchar todos os campos corretamente!')
            }
        }
    }

    const  validateAdoptionData = () =>{
        return email.length > 0 && value.length > 0;
    }

    const clearFields = () => {
        setEmail('')
        setValue('')
    }

    return{
        listPets,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        value,
        setValue,
        message,
        setMessage,
        adopt
        
    }

}
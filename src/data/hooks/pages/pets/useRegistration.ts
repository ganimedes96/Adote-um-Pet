import { useState } from "react";
import {Api} from '../../../services/Api'
import { AxiosError } from "axios";

export const useRegistration = () => {
    const [name, setName] = useState(''),
          [about, setAbout] = useState(''),
          [photo, setPhoto] = useState(''),
          [message, setMessage] = useState('');  
    

        const register = () =>{
              if(validationForms()){
                  Api.post('/pets', {
                    name,
                    about,
                    photo
                  }).then(()=>{
                      clear();
                      setMessage('Pet cadastrado com sucesso!');
                  }).catch((error: AxiosError<any>) =>{
                      setMessage(error.response?.data.message)
                  })
              }else{
                setMessage('Preencha todos os campos');
              }
        }
        const validationForms = () =>{
            return name.length > 2 && about.length > 20 && photo.length > 5;
        }

        const  clear = () =>{
            setName('');
            setAbout('');
            setPhoto('')
        }

        return{
            name,
            about,
            photo,
            setPhoto,
            setName,
            setAbout,
            register,
            message,
            setMessage,
        }
}
import { Title } from "../../ui/components/Title";
import {useRegistration} from "../../data/hooks/pages/pets/useRegistration"
import {Paper, Grid, Button, TextField, Snackbar} from '@mui/material'


export default function Registration  () {
   const {
    name,
    about,
    photo,
    setPhoto,
    setName,
    setAbout,
    register,
    message,
    setMessage,
   } = useRegistration()
    
    return (
        <>
            <Title
                title={'Cadastro de Pets para Adocao'}
                subTitle={'Preencha os dados do novo Pet'}
            />
            <Paper sx={{maxWidth: 900, mx:'auto', p:5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                         <TextField
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label={'Nome'}
                            placeholder={'Digite o nome do pet'}
                            fullWidth
                         />   
                    </Grid>
                    <Grid item xs={12}>
                         <TextField
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            label={'Historia do pet'}
                            placeholder={'Historia do pet'}
                            multiline
                            fullWidth
                            rows={4}
                         />   
                    </Grid>
                    <Grid item xs={12}>
                         <TextField
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            label={'Foto'}
                            placeholder={'Digite o endereco do imagem'}
                            fullWidth
                         /> 
                         <Button
                            variant={'contained'}
                            color={'secondary'}
                            sx={{mt: 2}}
                            component={'a'}
                            href={'https://imgur.com/upload'}
                            target={'blank'}
                         >
                            Enviar Imagem
                        </Button>  
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center', mt: 4}}>
                            <Button
                                onClick={register}
                                variant={'contained'}
                                fullWidth
                                sx={{maxWidth: {md: 200}}}
                            >
                                Cadastrar Pet
                            </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar
                open={message.length > 0}
                autoHideDuration={2500}
                onClose={()=> setMessage('')}
                message={message}
            />
        </>
    )
}
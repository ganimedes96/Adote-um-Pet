import { Title } from "../ui/components/Title"
import type { NextPage } from "next"
import { CardList } from "../ui/components/CardList"
import { Dialog,TextField, Grid, DialogActions,Button, Snackbar } from "@mui/material"
import {useIndex} from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {

  const {
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

    } = useIndex()

  return (
    <>
      <Title
        title=''
        subTitle={
          <span>Com um pequeno valor mensal, voce <br/>
            pode <strong> adotar um pet virtualmente </strong> </span>
      }
      />
      <CardList
        pets={listPets}
        onSelect={(pet) => setSelectedPet(pet)}
      />
      <Dialog 
        open={selectedPet !== null }
        fullWidth  
        PaperProps={{sx: {p: 5}}}
        onClose={() => setSelectedPet(null)}
        >
          <Grid 
            container
            spacing={2}  
            >
             <Grid item xs={12}>

              <TextField 
                label={"E-mail"}
                type={"email"}
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
             </Grid>
             <Grid item xs={12}>

            <TextField 
              label={"Quantia por mes"}
              fullWidth  
              type={"number"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
             </Grid>
          </Grid>
          <DialogActions sx={{mt: 5}}>
            <Button 
              color={'secondary'}
              onClick={() => setSelectedPet(null)}
              >
                  Cancelar
            </Button>
              <Button 
                variant={'contained'}
                onClick={() => adopt()}
                >
                  Confirmar Adocao
              </Button>
          </DialogActions>
      </Dialog> 
      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
      />
    </>
  )
}

export default Home

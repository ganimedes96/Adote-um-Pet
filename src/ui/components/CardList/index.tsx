import {Button} from '@mui/material' 
import { Pet } from '../../../data/@types/Pets';
import {
    ListStyled, 
    ItemList, 
    Info,
    Description,
    Name,
    Photo,
} from './CardList.style'
import {TextService} from '../../../data/services/TextService'

interface ListProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export const CardList = ({pets,onSelect}:ListProps) =>{
    const maximumTextSize = 200;
    return(
            <ListStyled>
                {
                   pets.map(pet => (
                        <ItemList key={pet.id} >
                            <Photo src={pet.photo} alt={pet.name}/>
                            <Info>
                                <Name>{pet.name}</Name>
                                <Description>
                                    {TextService.limitText( pet.about, maximumTextSize)}
                                </Description>
                                <Button
                                    variant={'contained'}
                                    fullWidth
                                    onClick={() => onSelect(pet)}
                                >Adotar {pet.name}</Button>
                            </Info>
                    </ItemList>
                    ))
                }
            </ListStyled>
    )
}
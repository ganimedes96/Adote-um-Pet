import { HeaderContainer, Logo, LinksContainer } from "./AdminHeader.style"
import {Link,Box} from '@mui/material'
import NextLink from 'next/link' 

export const AdminHeader =() =>{
    return (
        <HeaderContainer>
            <div>
                <Logo src={`/images/logo.svg`} alt={'Adote um pet'}/> 
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/cadastro'}>
                       <a href="">Cadastrar pet</a> 
                    </Link>

                    <Link component={NextLink} href={'/pets/relatorio'}>
                        <a href=""> Relatoria{' '} 
                            <Box 
                                component={'span'}
                                sx={{display:{sm: 'initial', xs:'none'}}}    
                                >
                                de adocao
                            </Box>
                        </a>    
                    </Link>
                </LinksContainer>          
             </div>
        </HeaderContainer>
    )
}     
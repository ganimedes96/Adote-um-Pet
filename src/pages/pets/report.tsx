import { Title } from "../../ui/components/Title"
import {
Paper,
TableContainer,
Table,
TableHead,
TableRow,
TableCell,
TableBody
} from '@mui/material'
import { useReport } from "../../data/hooks/pages/pets/useReport"


export default function Reporter () {
   const {listReport} = useReport()
    
    return(
        <>
        <TableContainer
            component={Paper}
            sx={{maxWidth: 830, mx: 'auto', p: {xs: 3, md: 5 }}}
        >

            <Title
                title={'Relatorio de Adocao'}
                subTitle={'Veja a lista de pets adotados'}
            />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Pet</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell align={"right"}>Valor mensal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listReport.map((report)=>(
                        <TableRow key={report.id}>
                            <TableCell>{report.pet.name}</TableCell>
                            <TableCell>{report.email}</TableCell>
                            <TableCell align={"right"}>{report.valor}</TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}
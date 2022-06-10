import {useState, useEffect }from'react'
import { Report } from '../../../@types/Report'
import { Api } from '../../../services/Api'


export const useReport = () => {
    const [listReport, setListReport] = useState<Report[]>([])
    useEffect(() =>{
        Api.get('/adocoes').then((response) =>{
            setListReport(response.data)
        })
    },[])
    return {
        listReport
    }
}
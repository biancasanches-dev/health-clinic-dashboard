import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from "@mui/material";
import IAppointment from "../../types/IAppointment";
import { styled } from '@mui/material/styles';
import Button from "../Button";
import Title from "../Title";

const StyledCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: '#172554',
        backgroundColor: "#e2e8f0",
        fontSize: 18,
        fontWeight: 700,
    },
    [`&.${tableCellClasses.body}`] : {
        fontSize: 16,
    },
}));

const StyledRow = styled(TableRow)(() => ({
    '&:nth-of-type(even)': {
        backgroundColor: "#e2e8f0",
        align: "right"
    }
}));

export default function TableUI({ appointments }: { appointments: IAppointment[] | null}) {

    return(
        <>
            <Title img="appointment">Consultas do dia</Title>
            <TableContainer>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledCell>Data</StyledCell>
                            <StyledCell>Horário</StyledCell>
                            <StyledCell>Profissional</StyledCell>
                            <StyledCell>Especialidade</StyledCell>
                            <StyledCell>Paciente</StyledCell>
                            <StyledCell>Modalidade</StyledCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments?.map((row) => {
                            return(
                                <StyledRow>
                                    <StyledCell component="th" scope="row">{new Date(row.data).toLocaleDateString()}</StyledCell>
                                    <StyledCell component="th" scope="row">{row.horario}</StyledCell>
                                    <StyledCell component="th" scope="row">{row.profissional[0].nome}</StyledCell>
                                    <StyledCell component="th" scope="row">{row.profissional[0].especialidade}</StyledCell>
                                    <StyledCell component="th" scope="row">{row.paciente}</StyledCell>
                                    <StyledCell component="th" scope="row">{row.modalidade}</StyledCell>
                                </StyledRow>
                            )})
                        }

                    </TableBody>
                </Table>
            </TableContainer>
            {appointments && appointments.length > 4 ?
                <Button>Ver mais</Button>
                : ""
            }
        </>

    )
}
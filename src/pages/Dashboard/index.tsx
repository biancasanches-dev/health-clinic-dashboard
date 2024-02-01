import { useState } from "react";
import Assessments from "../../components/Assessments";
import Button from "../../components/Button";
import Chart from "../../components/Chart";
import Container from "../../components/Container";
import TableUI from "../../components/Table";
import Title from "../../components/Title";
import useDataAppointment from "../../useDataAppointment";
import useDataProfessionals from "../../useDataProfessionals";
import RegisterModal from "./Modal";

export default function Dashboard() {
    const { data: appointments, error: appointmentsError } = useDataAppointment();
    const { data: professionals, error: professionalsError } = useDataProfessionals();
    const [ open, setOpen ] = useState(false);

    const handleOpen = () => {
      setOpen(true)
    }
    const handleClose = () => {
      setOpen(false)
    }
  
    if (appointmentsError || professionalsError) {
      console.log('Erro de requisição');
    }
  
    return (
        <Container>
          <Title>Área Administrativa</Title>
          <Button onClick={() => handleOpen()} >Cadastrar especialista</Button>
          <RegisterModal open={open} handleClose={handleClose} />
          <TableUI appointments={appointments} />
          <Chart appointments={appointments} professionals={professionals}/>
          <Assessments professionals={professionals}/>
        </Container>
  
    )
}
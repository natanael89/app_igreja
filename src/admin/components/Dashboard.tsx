import React, { useEffect, useState } from 'react';
import { Box, H2, TableCell, TableRow, Text, Table, TableHead, TableBody } from '@adminjs/design-system';
import { ApiClient, useCurrentAdmin } from 'adminjs';

const Dashboard = () => {
    const [currentAdmin] = useCurrentAdmin()
    const [resources, setResources] = useState<{[key: string]: number}>()
    const apiClient = new ApiClient();

    useEffect(() => {
        fetchDashboardData();
    }, [])


    async function fetchDashboardData() {
        const response = await apiClient.getDashboard();
        console.log(response.data);

        setResources(response.data)
    }

    return (
        <section style={{textAlign: 'center'}}>
           <Box variant="grey" px="xl" bg="white">
            <H2 color="success">Seja bem-vindo ao Painel de Administração</H2>
            <H2>{currentAdmin?.first_name}</H2>
            <Text>Use o menu de navegação para gerenciar recursos.</Text>
            </Box>
            <Table style={{backgroundColor: '#FFF', padding: '1.5rem'}}>
                <TableHead>
                    <TableRow style={{ backgroundColor: '#1e8449'}}>
                        <TableCell style={{ color: "#FFF"}}>Recurso</TableCell>
                        <TableCell style={{ color: "#FFF"}}>Registros</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
              resources ?
                Object.entries(resources).map(([resource, count]) => (
                  <TableRow key={resource}>
                    <TableCell>{resource}</TableCell>
                    <TableCell>{count}</TableCell>
                  </TableRow>
                ))
                :
                <></>
                    }
                </TableBody>
            </Table>
        </section>
    )
}

export default Dashboard;
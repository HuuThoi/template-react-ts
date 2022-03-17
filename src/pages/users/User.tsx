import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { UserService } from 'services/user-service';
import { Table } from 'antd';
import { TableWrapper } from 'styles/styled-components';
import shortid from  "shortid";

const UserPage = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        const fetchData = async () => {
            UserService.getAllUsers().then((resp: any) => {
                setUsers(resp.data.items)
            })
        };
        fetchData();
    }, []);

    const columns = [
        {
            title: 'Flight Number',
            dataIndex: 'flight_number',
            key: 'flight_number',
            width: '30%'
        },
        {
            title: 'Mission Name',
            dataIndex: 'mission_name',
            key: 'mission_name',
            width: '30%'
        },
        {
            title: 'Launch Year',
            dataIndex: 'launch_year',
            key: 'launch_year',
            width: '40%',
        },
    ];

    return (
        <TableWrapper>
            <Table pagination={{ simple: true }} rowKey={shortid.generate()} dataSource={users} columns={columns} />
        </TableWrapper>
    )


}
export default UserPage;

import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { UserService } from 'services/user-service/user.service';
import { Table } from 'antd';
import TableWrapper from 'styles/styled-components/table-wrapper';

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
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            width: '30%'
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            width: '30%'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'mail',
            width: '40%',
        },
    ];

    return (
        <TableWrapper>
            <Table pagination={{ simple: true }} key="mail" dataSource={users} columns={columns} />
        </TableWrapper>
    )


}
export default UserPage;

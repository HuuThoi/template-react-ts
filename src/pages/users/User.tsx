import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { UserService } from 'services/user-service/user.service';
import { Table } from 'antd';

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
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'mail',
        },
    ];

    return (
        <div className="">
            <Table key="mail" dataSource={users} columns={columns} />
        </div>
    )


}
export default UserPage;

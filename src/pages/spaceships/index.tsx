import { Table } from 'antd';
import { Maybe, useLaunchListQuery } from 'graphql/generated';
import { TableWrapper } from 'styles/styled-components';
import './index.scss';

const Spaceship = () => {
    const { data, error, loading } = useLaunchListQuery();

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error || !data) {
      return <div>ERROR</div>;
    }
    
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

    let _data: Array<Maybe<any>> = data?.launches || [];
    return (
        <TableWrapper>
            <Table pagination={{ simple: true }} dataSource={_data} columns={columns} />
        </TableWrapper>
    )
}

export default Spaceship;
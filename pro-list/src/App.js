/*
 * @Author: liy54 liy@54mingyuanyun.com
 * @Date: 2025-11-01 22:12:15
 * @LastEditors: liy54 liy@54mingyuanyun.com
 * @LastEditTime: 2025-11-01 22:14:00
 * @FilePath: /concurrent post/product-list/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Table } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const generateData = () => {
  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({
      id: i,
      name: `商品 ${i}`,
      image: `https://picsum.photos/id/${i % 100}/200/200`,
      date: new Date(Date.now() - Math.floor(Math.random() * 365) * 24 * 60 * 60 * 1000).toLocaleDateString()
    });
  }
  return data;
};

const dataSource = generateData();

const columns = [
  {
    title: '商品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '商品图片',
    dataIndex: 'image',
    key: 'image',
    render: (image) => <img src={image} alt="商品图片" style={{ width: 100, height: 100 }} />,
  },
  {
    title: '上架日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '操作',
    key: 'action',
    render: () => <ShoppingCartOutlined />,
  },
];

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>商品列表</h1>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        scroll={{ y: 800 }}
        pagination={false}
      />
    </div>
  );
}

export default App;

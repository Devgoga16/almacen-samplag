import React, { useEffect, useState } from 'react';
import { Table, Button, Modal } from 'antd';
import FormComponent from '../FormComponent/FormComponent';

export const TableFromApi = ({
	url = '',
	actions = { create: true, read: true, update: true, delete: true },
	columns = [],
	formCreateFields,
	formUpdateFields,
	textButtonCreate = 'Crear',
	textButtonUpdate = 'Actualizar',
	textButtonDelete = 'Eliminar',
}) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [modalVisible, setModalVisible] = useState(false);
	const [editingRecord, setEditingRecord] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const result = await response.json();
			setData(result);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
		setLoading(false);
	};

	const handleDelete = async (id) => {
		try {
			await fetch(`${url}/${id}`, { method: 'DELETE' });
			fetchData();
		} catch (error) {
			console.error('Error deleting record:', error);
		}
	};

	const handleEdit = (record) => {
		setEditingRecord(record);
		setModalVisible(true);
	};

	const handleCreate = () => {
		setEditingRecord(null);
		setModalVisible(true);
	};

	const handleFormSubmit = async (values) => {
		try {
			const method = editingRecord ? 'PUT' : 'POST';
			const urlToSend = editingRecord ? `${url}/${editingRecord.id}` : url;
			await fetch(urlToSend, {
				method,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			});
			setModalVisible(false);
			fetchData();
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const enhancedColumns = [...columns];
	if (actions.update || actions.delete) {
		enhancedColumns.push({
			title: 'Actions',
			key: 'actions',
			render: (text, record) => (
				<>
					{actions.update && <Button onClick={() => handleEdit(record)}>Editar</Button>}
					{actions.delete && (
						<Button danger onClick={() => handleDelete(record.id)}>
							{textButtonDelete}
						</Button>
					)}
				</>
			),
		});
	}

	return (
		<>
			<div
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'end',
				}}>
				{actions.create && (
					<Button type="primary" onClick={handleCreate}>
						{textButtonCreate}
					</Button>
				)}
			</div>
			<Table
				columns={enhancedColumns}
				dataSource={data}
				loading={loading}
				rowKey="id"
				pagination={{ position: ['bottomRight'], pageSize: 15 }} // Paginador arriba y abajo
			/>
			<Modal open={modalVisible} onCancel={() => setModalVisible(false)} footer={null}>
				<FormComponent
					fields={editingRecord ? formUpdateFields : formCreateFields}
					onSubmit={handleFormSubmit}
					initialValues={editingRecord}
					textBotton={editingRecord ? textButtonUpdate : textButtonCreate}
				/>
			</Modal>
		</>
	);
};

export default TableFromApi;

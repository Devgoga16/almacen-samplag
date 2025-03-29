import TableFromApi from '../../components/TableFromApi/TableFromApi';

const columns = [
	{ title: 'ID', dataIndex: 'id', key: 'id' },
	{ title: 'Concepto', dataIndex: 'concept', key: 'concept' },
	{ title: 'Monto', dataIndex: 'amount', key: 'amount' },
];

const formCreateFields = [
	{ label: 'Concepto', name: 'concept', type: 'text' },
	{ label: 'Monto', name: 'amount', type: 'number' },
];

const formUpdateFields = [
	{ label: 'Concepto', name: 'concept', type: 'text' },
	{ label: 'Monto', name: 'amount', type: 'number' },
];

export const Salidas = () => {
	return (
		<div className="tab-content">
			<h1>Salidas</h1>
			<p>Registra y ve el historial de tus salidas</p>
			<br />
			<TableFromApi
				url="https://jsonplaceholder.typicode.com/comments"
				columns={columns}
				actions={{ create: true, read: true, update: true, delete: true }}
				formCreateFields={formCreateFields}
				formUpdateFields={formUpdateFields}
				textButtonCreate="Crear Salida"
				textButtonUpdate="Actualizar Salida"
				textButtonDelete="Eliminar Salida"
			/>
		</div>
	);
};

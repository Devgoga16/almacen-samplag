import TableFromApi from '../../components/TableFromApi/TableFromApi';

const columns = [
	{ title: 'ID', dataIndex: 'id', key: 'id' },
	{ title: 'Nombre', dataIndex: 'name', key: 'name' },
	{ title: 'Edad', dataIndex: 'age', key: 'age' },
];

const formCreateFields = [
	{ label: 'Nombre', name: 'name', type: 'text' },
	{ label: 'Edad', name: 'age', type: 'number' },
];

const formUpdateFields = [
	{ label: 'Nombre', name: 'name', type: 'text' },
	{ label: 'Edad', name: 'age', type: 'number' },
];

export const Ingresos = () => {
	return (
		<div className="tab-content">
			<h1>Ingresos</h1>
			<p>Registra y ve el historial de tus ingresos</p>
			<br />
			<TableFromApi
				url="https://jsonplaceholder.typicode.com/users"
				columns={columns}
				actions={{ create: true, read: true, update: true, delete: true }}
				formCreateFields={formCreateFields}
				formUpdateFields={formUpdateFields}
				textButtonCreate="Crear Ingreso"
				textButtonUpdate="Actualizar Ingreso"
				textButtonDelete="Eliminar Ingreso"
			/>
		</div>
	);
};

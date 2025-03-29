import TableFromApi from '../../components/TableFromApi/TableFromApi';

const columns = [
	{ title: 'ID', dataIndex: 'id', key: 'id' },
	{ title: 'Producto', dataIndex: 'product', key: 'product' },
	{ title: 'Precio', dataIndex: 'price', key: 'price' },
];

const formCreateFields = [
	{ label: 'Producto', name: 'product', type: 'text' },
	{ label: 'Precio', name: 'price', type: 'number' },
];

const formUpdateFields = [
	{ label: 'Producto', name: 'product', type: 'text' },
	{ label: 'Precio', name: 'price', type: 'number' },
];

export const Productos = () => {
	return (
		<div className="tab-content">
			<h1>Productos</h1>
			<p>Administra los productos disponibles</p>
			<br />
			<TableFromApi
				url="https://jsonplaceholder.typicode.com/posts"
				columns={columns}
				actions={{ create: true, read: true, update: true, delete: true }}
				formCreateFields={formCreateFields}
				formUpdateFields={formUpdateFields}
				textButtonCreate="Crear Producto"
				textButtonUpdate="Actualizar Producto"
				textButtonDelete="Eliminar Producto"
			/>
		</div>
	);
};

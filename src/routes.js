import PaginaPadrao from 'components/paginaPadrao/PaginaPadrao';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/menu';

export default function AppRouter() {
	return (
		<main>
			<Router>
				<Menu />

				<Routes>
					<Route path='/' element={<PaginaPadrao />}>
						<Route index element={<Inicio />} />
						<Route path='cardapio' element={<Cardapio />} />
					</Route>
				</Routes>
			</Router>
		</main>
	);
}
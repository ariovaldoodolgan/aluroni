import styles from './Prato.module.scss';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagPrato from 'components/tagsPrato';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/paginaPadrao/PaginaPadrao';

export default function Prato() {
	const { id } = useParams();
	const navigate = useNavigate();
	
	const prato = cardapio.find(el => el.id === Number(id));

	if (prato === undefined) {
		return (
			<NotFound />
		);
	}

	return (
		<Routes>
			<Route path='*' element={<PaginaPadrao />}>
				<Route index element={
					<>
						<button className={styles.voltar} onClick={() => navigate(-1)}>
							{'< Voltar'}
						</button>

						<section className={styles.container}>
							<h1 className={styles.titulo}>{prato?.title}</h1>

							<div className={styles.imagem}>
								<img src={prato?.photo} alt={prato?.title} />
							</div>

							<div className={styles.conteudo}>
								<p className={styles.conteudo__descricao}>{prato?.description}</p>

								<TagPrato {...prato}/>
							</div>
						</section>
					</>}
				/>
			</Route>
		</Routes>
	);
}
import styles from './Item.module.scss';
import TagPrato from 'components/tagsPrato';
import { Prato } from 'types/Prato';
import { useNavigate } from 'react-router';

export default function Item(item: Prato) {
	const navigate = useNavigate();

	return (
		<div className={styles.item} onClick={() => navigate(`/prato/${item.id}`)}>
			<div className={styles.item__imagem}>
				<img src={item.photo} alt={item.title} />
			</div>

			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2>{item.title}</h2>
					<p>{item.description}</p>
				</div>

				<TagPrato {...item} />
			</div>
		</div>
	);
}
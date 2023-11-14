import { deleteAsync } from 'del';

export const clearing = () => {
	return deleteAsync(app.path.clean);
}

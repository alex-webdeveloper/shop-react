import { useEffect } from 'react';

export default function Alert({ name = '', closeAlert = Function.prototype }) {

	useEffect(() => {
        let timerId = setTimeout(closeAlert, 3000);
        
		return () => clearTimeout(timerId);
		// eslint-disable-next-line
	}, [name]);

	return (
		<>
			<div className="alert-basket text-center text-bg-dark p-2">
				{name} добавлен в корзину
			</div>
		</>
	);
}

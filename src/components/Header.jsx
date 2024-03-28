import { useState } from "react";


export default function Header({onSubmitForm}) {
	const [search, setSearch] = useState('');
	const [type, setType] = useState('all');


	return (
		<nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					React Shop
				</a>
				<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
				>
				<span className="navbar-toggler-icon"></span>
				</button>
			</div>
		</nav>
	);
}

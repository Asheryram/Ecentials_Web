import { Outlet } from "react-router-dom";

const ProtectedDashboard = () => {
	const v = true;
	return (
		<>
			<div>Just a protector page</div>
			{v ? <Outlet /> : <h1>Pharmacy dashboard not authorized</h1>}
		</>
	);
};

export default ProtectedDashboard;

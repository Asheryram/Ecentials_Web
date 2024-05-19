import { Outlet } from "react-router-dom";

const PharmacyIndex = () => {
	return (
		<>
			<div>pharmacy initial page</div>
			<Outlet />
		</>
	);
};

export default PharmacyIndex;

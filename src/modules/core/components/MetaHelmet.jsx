import { Helmet } from "react-helmet";
// eslint-disable-next-line react/prop-types
const MetaHelmet = ({title}) => {
	return (
		<Helmet>
			<title> {title} | Ecentials</title>
			<meta name="description" content="Health Care application" />
			<meta
				name="keywords"
				content="ecentails, ecential, hospital, pharmacy, epharmacy, e-pharmacy, lab, Health Care application"
			/>
		</Helmet>
        
	);
};

export default MetaHelmet;

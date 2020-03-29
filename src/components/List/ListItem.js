import styled from 'styled-components';

const ListItem = styled.li`
	display: ${(props) => (props.inline ? 'inline' : 'block')};
	margin-left: ${(props) => (props.inline ? '2rem' : '0')};
	font-size: 105%;
	font-family: itc-benguiat, serif;
	font-style: normal;
	font-weight: 600;
	color: white;
	;

	a {
		color: white;
		text-decoration: none;
		&:hover {
			color: red;
		}
	}
`;

export default ListItem;

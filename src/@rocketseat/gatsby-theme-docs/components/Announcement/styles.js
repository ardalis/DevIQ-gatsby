import styled from '@emotion/styled';

export const Container = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;
	background-color: #3e2985;
	color: #ffffff;
	text-align: center;
	padding: 0.5rem;
`;

export const Space = styled.div`
	padding: 1.5rem;
	@media (max-width: 800px) {
		padding: 2rem;
	}
`;

export const Link = styled.a`
	border: 1px solid #ffffff;
	color: #ffffff;
	padding: 0.1rem;
	margin-left: 0.5rem;
	text-decoration: none;
	font-weight: 400;
	&:hover {
		background-color: #ffffff;
		color: red;
		text-decoration: none;
	}
	@media (max-width: 800px) {
		display: inline-block;
	}
`;
export const HideBtn = styled.span`
	padding: 1rem;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

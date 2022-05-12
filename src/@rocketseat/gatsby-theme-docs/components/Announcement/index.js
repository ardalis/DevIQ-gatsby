import React from 'react';
import { useLocation } from '@reach/router';

import { Container, Space, Link, HideBtn } from './styles';
import announcementValues from './values';
import { useState } from 'react';

export default function Announcement() {
	const location = useLocation();
	const hideDate = new Date(parseInt(localStorage.getItem('hideDate') ?? 0));
	const [hide, setHide] = useState(hideDate > new Date());

	const pathname = location.pathname.split('/')[1];
	const { text, link } =
		announcementValues[pathname] ?? announcementValues['default'];

	const handleHide = () => {
		setHide(true);
		let date = new Date();
		const next30days = date.setDate(date.getDate() + 30);
		localStorage.setItem('hideDate', next30days.toString());
	};

	return (
		<>
			{!hide && (
				<>
					<Container>
						{text}
						<Link href={link}>Check it out »</Link>
						<HideBtn onClick={handleHide}>Hide</HideBtn>
					</Container>
					<Space />
				</>
			)}
		</>
	);
}

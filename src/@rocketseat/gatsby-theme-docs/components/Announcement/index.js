import React from 'react';
import { useLocation } from '@reach/router';

import { Container, Space, Link } from './styles';
import announcementValues from './values';

export default function Announcement() {
	const location = useLocation();
	const pathname = location.pathname.split('/')[1];
	const { text, link } =
		announcementValues[pathname] ?? announcementValues['default'];
	return (
		<>
			<Container>
				{text}
				<Link href={link}>Check it out »</Link>
			</Container>
			<Space />
		</>
	);
}

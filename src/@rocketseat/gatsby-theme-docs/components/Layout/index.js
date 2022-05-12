/* @jsx jsx */
import { useState, useRef, Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

import TableOfContents from '../Docs/TOC';
import Announcement from '../Announcement';
import Sidebar from '@rocketseat/gatsby-theme-docs/src/components/Sidebar';
import Header from '@rocketseat/gatsby-theme-docs/src/components/Header';
import Overlay from '@rocketseat/gatsby-theme-docs/src/components/Overlay';
import { Container, Main, Children } from './styles';

export default function Layout({
	children,
	disableTableOfContents,
	title,
	headings,
}) {
	const contentRef = useRef(null);
	const [isMenuOpen, setMenuOpen] = useState(false);
	const disableTOC =
		disableTableOfContents === true || !headings || headings.length === 0;

	function handleMenuOpen() {
		setMenuOpen(!isMenuOpen);
	}

	return (
		<Fragment>
			<Announcement />
			<Overlay isMenuOpen={isMenuOpen} onClick={handleMenuOpen} />
			<Container>
				<Sidebar isMenuOpen={isMenuOpen} />
				<Main>
					<Header handleMenuOpen={handleMenuOpen} />
					{title && (
						<h1
							css={css`
								display: none;

								@media (max-width: 1200px) {
									display: block;
								}
							`}
						>
							{title}
						</h1>
					)}
					<Children ref={contentRef}>
						{title && (
							<h1
								css={css`
									@media (max-width: 1200px) {
										display: none;
									}
								`}
							>
								{title}
							</h1>
						)}
						{children}
					</Children>
					<TableOfContents
						headings={headings}
						disableTOC={disableTOC}
						contentRef={contentRef}
					/>
				</Main>
			</Container>
		</Fragment>
	);
}

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	disableTableOfContents: PropTypes.bool,
	title: PropTypes.string,
	headings: PropTypes.array,
};

Layout.defaultProps = {
	disableTableOfContents: false,
	title: '',
	headings: null,
};

import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useSidebar } from '@rocketseat/gatsby-theme-docs-core';

import {
  Container,
  LogoContainer,
  List,
  Heading,
  Item,
  SubItem,
} from './styles';
import { isExternalUrl } from '../../util/url';
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';
import Logo from '../Logo';

function ListWithSubItems({ children, text }) {
  return (
    <>
      <Heading onClick={(target)=>{
        var currentDisplay = target.target.nextSibling.style.display;
        if (currentDisplay === "none" || currentDisplay === ""){
          target.target.classList.add("expanded");
          target.target.classList.remove("collapsed");
          target.target.nextSibling.style.display = "block";
        } else {
          target.target.classList.remove("expanded");
          target.target.classList.add("collapsed");
          target.target.nextSibling.style.display = "none";
        }
        }}>{text}</Heading>
      <SubItem>{children}</SubItem>
    </>
  );
}

export default function Sidebar({ isMenuOpen }) {
  const {
    site: {
      siteMetadata: { basePath },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          basePath
        }
      }
    }
  `);

  const data = useSidebar();

  function renderLink(link, label) {
    return isExternalUrl(link) ? (
      <ExternalLink link={link} label={label} />
    ) : (
      <InternalLink link={link} label={label} />
    );
  }
  
  useEffect(() => {
    var queryPath = window.location.pathname.substring(0,window.location.pathname.length-1);
    var linksForThisFolder = `a[href*="${queryPath}"]`;
    // li (previousSibling) ~ ul (parentElement)-> li (parentElement) -> a (we are here)
    try {
      var currentLink = document.querySelector(linksForThisFolder);
      var currentListItem = currentLink.parentElement;
      var currentSectionList = currentListItem.parentElement;
      if (currentSectionList != null) {
        var sectionHeader = currentSectionList.previousSibling;
        sectionHeader.classList.add("expanded");
        sectionHeader.classList.remove("collapsed");
        sectionHeader.nextSibling.style.display = "block";
      }
    } catch {

    }
  });

  return (
    <Container isMenuOpen={isMenuOpen}>
      <LogoContainer>
        <Link to={basePath} aria-label="Go to home page">
          <Logo aria-hidden="true" />
        </Link>
      </LogoContainer>
      <nav>
        <List>
          {data.map(({ node: { label, link, items, id } }) => {
            if (Array.isArray(items)) {
              const subitems = items.map((item) => (
                <Item key={item.link}>{renderLink(item.link, item.label)}</Item>
              ));

              return (
                <ListWithSubItems key={id} text={label}>
                  {subitems}
                </ListWithSubItems>
              );
            }
            return <Item key={id}>{renderLink(link, label)}</Item>;
          })}
        </List>
      </nav>
    </Container>
  );
}

ListWithSubItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

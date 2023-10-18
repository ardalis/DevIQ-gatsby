import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';

const SearchPage = () => {
  const queryData = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `)
  const index = queryData.localSearchPages.index
  const store = queryData.localSearchPages.store

  const [query, setQuery] = React.useState('')
  const results = useFlexSearch(query, index, store)

  return (
    <Layout title="Search the Site">
    <main>
      <label>
        <span>Search terms: </span>
        <input
          name="query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <h2>Results</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li><a href={result.slug} target="_blank" rel="noreferrer">{result.title}</a> - {result.description}</li>
          ))}
        </ul>
      ) : (
        <p>No results!</p>
      )}
    </main>
    </Layout>
  )
}

export default SearchPage
 import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(true)

  const fetchNews = async (pageNo) => {
    setLoading(true)
    props.setProgress(10)

    // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${pageNo}&pageSize=${props.pageSize}`
  // const url = `https://your-backend-url.vercel.app/news?category=${props.category}&page=${page}&pageSize=${props.pageSize}`
  const url = `${process.env.REACT_APP_BACKEND_URL}/news?category=${props.category}&page=${pageNo}&pageSize=${props.pageSize}`

    props.setProgress(30)
    try {
      const response = await fetch(url)
      props.setProgress(50)
      const parsedData = await response.json()

      if (parsedData.status !== "ok") {
        console.error(parsedData)
        setLoading(false)
        props.setProgress(100)
        return
      }

      setArticles(prev => prev.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setPage(pageNo + 1)

      setLoading(false)
      props.setProgress(100)
    } catch (error) {
      console.error(error)
      setLoading(false)
      props.setProgress(100)
    }
  }

  useEffect(() => {
    document.title = `NewsHub - ${props.category.toUpperCase()}`
    setArticles([])
    setTotalResults(0)
    setPage(1)
    fetchNews(1)
    // eslint-disable-next-line
  }, [props.category])

  return (
    <>
      <h2 className="text-center news-flow">
        NewsHub - Top {props.category.toUpperCase()} Headlines
      </h2>

      {loading && articles.length === 0 && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={() => fetchNews(page)}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title || "No title"}
                  description={element.description?.slice(0, 80) || ""}
                  Url={element.urlToImage || "https://via.placeholder.com/300x180"}
                  newzUrl={element.url}
                  author={element.author || "Unknown"}
                  date={
                    element.publishedAt
                      ? new Date(element.publishedAt).toGMTString()
                      : "Unknown"
                  }
                  source={element.source?.name || "Unknown"}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'us',
  pageSize: 9,
  category: 'general',
}

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News

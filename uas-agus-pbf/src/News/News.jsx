import React from 'react';
import axios from 'axios';
import './News.css'
import Firebase from "../firebase/config";
 
 
class News extends React.Component {
  state = {
    datas: [],
    isLoading: true,
    errors: null
  };
 
  Databerita() {
    axios
      .get(
        'http://newsapi.org/v2/top-headlines?country=id&apiKey=c1e204d533154f1ebb6a494d746b23c4'
      )
      .then(response =>
        response.data.articles.map(
          newsdata => ({
            name: `${newsdata.source.name}`,
            title: `${newsdata.title}`,
            description: `${newsdata.description}`,
            content: `${newsdata.content}`,
            image: `${newsdata.urlToImage}`,
            create: `${newsdata.publishedAt}`
          })
         
        )
      )
 
      .then(datas => {
        this.setState(
          {
            datas,
            isLoading: false
          },
          console.log(datas)
        );
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
 
 
 
  componentDidMount() {
    this.Databerita();
  }
 
  render() {
    const { isLoading, datas } = this.state;
    return (
      <React.Fragment>
            {!isLoading ? (
              datas.map(data => {
                const {
                  name,
                  title,
                  description,
                  image,
                  content,
                  create
                } = data;
 
                return (
                  <div key={data.title} className='container testi'>
                  
                        <div class="api">
                            <img className='img-fluid' src={image} alt='images' class="gambar" />
                            <div className='content-detail'>
                            <span>{create}</span>
                            <h4 className='title'>{title}</h4>
                            <p className='desc'>{description}</p>
                            <h4 className='content-name'>{name}</h4>
                            
                            <p className='content'>{content}</p>
                           
                              <button className='btn btn-info'>Read More</button>
                            
                            </div>
                        </div>
                   
                  </div>
                );
              })
            ) : (
            
            <div className="container">
                 <p className="text-center">Loading...</p>
            </div>
             
            )}
         
        
      </React.Fragment>
    );
  }
}
 
export default News;


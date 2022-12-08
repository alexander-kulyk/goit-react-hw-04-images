import { Component } from "react";
import { ToastContainer,  toast } from 'react-toastify';
import { ButtonLoadMore } from "./ButtonLoadMore/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { getImages } from "../service/api";

import 'react-toastify/dist/ReactToastify.css';



export class App extends Component {

  state = {
    inputValue: '',
    images: [],
    page: 1,
    selectedItem:[],

    loading: false,
    status: 'idle',
    error: null,
    visible: false,
  }

  async componentDidUpdate(_,  pS){
    
    const { inputValue, page } = this.state;

    if (pS.inputValue !== inputValue || pS.page !== page ) {

      try {
        this.setState({loading: true})
        const resp = await getImages(inputValue, page)
        const imagesData = resp.data.hits;

        if ( imagesData.length === 0) {
          throw new Error('Not a valid word');
  
        }

        this.setState({ 
              images: pS.inputValue === inputValue 
                ? [...pS.images,...imagesData.map(({id, webformatURL, largeImageURL,  tags}) =>({id, webformatURL, largeImageURL,  tags}))]
                : [...imagesData.map(({id, webformatURL, largeImageURL,  tags}) =>({id, webformatURL, largeImageURL,  tags}))],
              loading: false, 
              status: 'resolved',
            })
        
        // if (pS.inputValue === inputValue) {
        //   this.setState({ 
        //     images: [...pS.images,...imagesData], 
        //     loading: false, 
        //   })
        // }else{
        //   this.setState({
        //     images: [...imagesData],
        //     loading: false, 
        //   })
        // }
        
        
      } catch (error) {
        this.setState({
          status: "rejected", 
          loading: false,
          error
        })
        console.log(error);
        
      }
      
    }
  }

  handleSubmit =  inputValue =>{
    if (inputValue === '') {
      toast('Write something', {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return
    }

    this.setState({
      inputValue,
      loading: false,
      images:[],
      page: 1
    })
      
  }
  onClickLoadMoreBtn = e =>{
      this.setState(pS =>({
        page: pS.page +1
      }))
  }


  onClickCard = id => {
    const { images } = this.state;

    const item = images.find(img => img.id === id);
    console.log(item);
   
    this.setState({
      selectedItem: item
    })
    this.toggle()
  }

  toggle = () =>{
      this.setState( pS =>({
        visible: !pS.visible
    }))
  }


  render(){

    const { images, loading, selectedItem, visible, status, error } = this.state
    const { largeImageURL, tags} = selectedItem
    
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
        {status === 'resolved' && <ImageGallery imgData={images} onClickCard={this.onClickCard}/>}
        {status === 'idle' && <p style={{color: 'rgb(4, 120, 128)', textAlign: "center", marginTop: '50px'}}>Write something</p>}
        {status === 'rejected' && <p style={{color: 'red',  textAlign: "center"}}>{error?.message}! Try again!</p>}
        {loading && <Loader/>}
        {images.length > 0 && <ButtonLoadMore disabled={loading} onClickBtn ={this.onClickLoadMoreBtn} />}
        {visible && <Modal  url ={largeImageURL} tags={tags} toggle ={this.toggle}/>}
        <ToastContainer autoClose={3000}/>
      </div>
    );

  }
  
};

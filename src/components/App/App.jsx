import { Component } from "react";
import { Notify } from "notiflix";
import { SearchBar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";
import { Loader } from "components/Loader/Loader";
import { Container } from "./App.styled";
import { fetchItems } from "api/Api";

export class App extends Component  {
  state = {
    contentModal:"",
    searchQuery: "",
    page: 1,
    imagesVisible:[],
    isLoading: false,
    openModal: false,
  }

  componentDidUpdate(prevProps, { searchQuery, page }) {
    if (searchQuery !== this.state.searchQuery || page !== this.state.page) {
      this.dataGet();
    }
    this.onScroll();
  }
  
   toggleModal = () => {
    this.setState(({ openModal }) => ({ openModal: !openModal }));
  };

  toggleLoading = () => {
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  };


 
  hadleChangeQuery = ( query ) => {
    if (this.state.searchQuery !== query) {
      this.setState({
        searchQuery: query,
        page: 1,
        imagesVisible: [],
      });
    }
    else {
      this.setState({
        searchQuery: query,
      });
    };
  }

  handleNextPage = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  onScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  modalContentSet = (itemId) => {
    const { imagesVisible } = this.state;
    const element = imagesVisible.find(({ id }) => id === itemId);
    this.setState({ contentModal: element.largeImageURL });
  };

dataGet = () => {
    const { searchQuery, page } = this.state;
    this.toggleLoading();
    fetchItems(searchQuery, page)
      .then(({ hits }) => {
      if (hits.length === 0) {
      return Notify.failure(
      `There is no matches for ${searchQuery}, and 0 pages. Try to write down the another one request `
      );          
        }
        this.setState(({ imagesVisible }) => {
          // Notify.success(`Congradulations! Here are results, that we found for your "${searchQuery}" request`)
          return { imagesVisible: [...imagesVisible, ...hits] };
        });
      })
      .catch((error) => console.log(error.message))
      .finally(this.toggleLoading);
  };

  render() {
    const { imagesVisible, openModal, contentModal, isLoading, page } = this.state;
    const isNotLastPage = imagesVisible.length / page === 12;
    const buttonEnable = imagesVisible.length > 0 && !isLoading && isNotLastPage;
    return (
      <Container>
        <SearchBar onSubmit={this.hadleChangeQuery} />
        {imagesVisible.length !== 0&&
          <>
            <ImageGallery
              images={imagesVisible}
              onClick={this.toggleModal}
              onClickItem={this.modalContentSet}
              />             
            {openModal && (
              <Modal content={contentModal} onBackdrop={this.toggleModal} />
            )}
            {isLoading && <Loader />}

            {buttonEnable && (
              <Button name="Load more" onPress={this.handleNextPage} />
              )}
          </>
        }
      </Container>
    );
  }

};


//   onSubmitForm = (itemName) => {
//     this.setState({ itemName });
// }

// import { ToastContainer } from "react-toastify";



        // {/* <ToastContainer autoClose={3000} /> */}


      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}


      // {this.state.loading&& <h1>Loading</h1>}
      // {this.state.hit && (<div>Here is hit</div>)}

//   componentDidMount() {
//     this.setState({loading:true})


//     fetch("https://pixabay.com/api/?q=cat&page=1&key=29244012-a3c66d184bfa690c232ef78cc&image_type=photo&orientation=horizontal&per_page=12")
//     .then(res => res.json())
//     .then(hit => this.setState({ hit }))
//     .finally(()=> this.setState({loading:false}))
// }




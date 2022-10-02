import { useState } from "react"
import { Notify } from "notiflix";
import PropTypes from "prop-types";
import { SearchBarStyled, SearchForm, SubmitBtn, SearchInput, SearchFormButtonLabel } from "./SearchBar.styled";
import { FaSearch } from "react-icons/fa"



export function SearchBar ({onSubmit})  {  
  const [searchQuery, setSearchQuery] = useState('');

  const onChange = (event) => {
  switch (event.target.name) {
      case "searchQuery":
        setSearchQuery(event.target.value.toLowerCase());
        break;

      default:
        return;
  }
  };
  

  const  onFormSubmit = (event) => {
    event.preventDefault()
    if (searchQuery.trim() === "") {
      return Notify.warning("Please fill out the search field with the request, to start the searching")
    }
    else {
      onSubmit(searchQuery)
    }
  };


    return (
    <SearchBarStyled>
    <SearchForm  onSubmit={onFormSubmit}>
    <SubmitBtn type="submit"> <FaSearch/>
    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
    </SubmitBtn>

    <SearchInput
      className="input"
      type="text"
      name="searchQuery"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos..."
      onChange={onChange}
      value= {searchQuery}
    />
    </SearchForm>
</SearchBarStyled>
        )
    };

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}



//==================================WAS======================================//


// import { Component } from "react"
// import { Notify } from "notiflix";
// import PropTypes from "prop-types";
// import { SearchBarStyled, SearchForm, SubmitBtn, SearchInput, SearchFormButtonLabel } from "./SearchBar.styled";
// import { FaSearch } from "react-icons/fa"



// export class SearchBar extends Component {
//     state = {
//       searchQuery: '',
//     }

//     static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };
    
//     onChange =(event) =>{
//         this.setState({ searchQuery: event.currentTarget.value.toLowerCase() })
//     }

//     onFormSubmit = (event) => {
//         event.preventDefault()
//       if (this.state.searchQuery.trim() === "") {
//         return  Notify.warning("Please fill out the search field with the request, to start the searching")
//       }
//         this.props.onSubmit(this.state.searchQuery)
//         // this.setState({ searchQuery: "" })
//     }

//     render() {
//       const { searchQuery } = this.state;
//         return (
//     <SearchBarStyled>
//     <SearchForm  onSubmit={this.onFormSubmit}>
//     <SubmitBtn type="submit"> <FaSearch/>
//     <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//     </SubmitBtn>

//     <SearchInput
//       className="input"
//       type="text"
//       autoComplete="off"
//       autoFocus
//       placeholder="Search images and photos..."
//       onChange={this.onChange}
//       value= {searchQuery}
//     />
//               </SearchForm>
// </SearchBarStyled>
//         )
//     }
// }
import React, { Component } from "react";
import NewReelCard from "../components/NewReelCard";
import Logo from "../components/Logo";
import NewReelList from "../components/NewReelList";
import NewReelListItem from "../components/NewReelListItem";
import Title from "../components/TitleForEachPage";
import UsernameDisplay from "../components/UsernameDisplay";

class NewReelPage extends Component {
    state = {
        movies: [],
        newReelMovieImg: "",
        title: "New Reel",
        username: "username"
    }
    render () {
        return (
            <div>
            <NewReelCard>
            <div className="page-header">
                <Logo />
                <p className="title-div">
                    <Title title={this.state.title} />
                    <UsernameDisplay username={this.state.username}/>
                </p>
            </div>
            <div>
                {/* {!this.state.movies.length ? ( */}
                    <NewReelList>
                    {/* {this.state.books.map((movie, index) => { */}
                    {/* return ( */}
                        <NewReelListItem
                            // movieImg={movie.newReelMovieImg}
                        // key={index}
                        // title={book.title}
                        // authors={book.authors}
                        // description={book.description}
                        // image={book.image}
                        // link={book.link}
                        // HandleClick={() => this.handleSaveBook(book)}
                        // isDelete={false}
                        />
                    {/* );
                    })} */}
                    </NewReelList>
                {/* ) : ( */}
                {/* <div></div> */}
                {/* )} */}
            </div>
            </NewReelCard>
            </div>
        );
    }
}


export default NewReelPage;
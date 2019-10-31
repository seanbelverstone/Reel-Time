import React, { Component } from "react";
import DefaultCard from "../components/DefaultCard";
import Logo from "../components/Logo";
import NewReelList from "../components/NewReelList";
import NewReelListItem from "../components/NewReelListItem";
import Title from "../components/TitleForEachPage";

class NewReelPage extends Component {
    state = {
        movies: [],
        newReelMovieImg: "",
        title: "New Reel"
    }
    render () {
        return (
            <div>
            <DefaultCard>
            <div className="page-header">
                <Logo />
                <Title title={this.state.title} />
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
            </DefaultCard>
            </div>
        );
    }
}


export default NewReelPage;
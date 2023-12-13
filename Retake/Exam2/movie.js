//65130500025 Thanachanok Banjongjinda

class Movies {
  constructor() {
    this.movies = [];
  }

  getAllMovies() {
    return this.movies;
  }

  addMovie(title, director, year, genre) {
    if (
      title === undefined ||
      director === undefined ||
      year === undefined ||
      genre === undefined
    ) {
      return undefined;
    }

    const isDuplicate = this.movies.some(
      (movie) =>
        movie.title.toLowerCase() === title.toLowerCase() &&
        movie.director.toLowerCase() === director.toLowerCase()
    );

    if (isDuplicate) {
      return undefined;
    } else {
      const newMovies = {
        title: title,
        director: director,
        year: year,
        genre: genre,
      };
      this.movies.push(newMovies);
      return newMovies;
    }
  }

  updateMovie(title, updateDetails) {
    let findMovie = this.movies.find(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );
    if (findMovie === undefined) {
      return undefined;
      //return findMovie;
    }
    let { director, year, genre } = updateDetails;
    if (director !== undefined) {
      findMovie.director = director;
    }
    if (year !== undefined) {
      findMovie.year = year;
    }
    if (genre !== undefined) {
      findMovie.genre = genre;
    }
    return findMovie;
    
  }

  deleteMovieByTitle(title) {
    const findIndex = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );
    if (findIndex !== -1) {
      this.movies.splice(findIndex, 1);
    } else {
      return "no movie deleted";
    }
  }
}

module.exports = Movies;


// class Movies {
//   constructor() {
//     this.movies = [];
//   }

//   getAllMovies() {
//     return this.movies;
//   }

//   addMovie(title, director, year, genre) {
//     // const newMovies = {title, director, year, genre}
//     if (
//       title === undefined ||
//       director === undefined ||
//       year === undefined ||
//       genre === undefined
//     ) {
//       return undefined;
//     }

//     const isDuplicate = this.movies.some(
//       (movie) =>
//         movie.title.toLowerCase() === title.toLowerCase() &&
//         movie.director.toLowerCase() === director.toLowerCase()
//     );

//     if (isDuplicate) {
//       return undefined;
//     } else {
//       const newMovies = {
//         title: title,
//         director: director,
//         year: year,
//         genre: genre,
//       };
//       this.movies.push(newMovies);
//       return newMovies;
//     }
//   }

//   updateMovie(title, updateDetails) {
//     const findMovie = this.movies.findIndex(
//       (movie) => movie.title.toLowerCase() === title.toLowerCase()
//     );

//     if (!findMovie) {
//       return undefined;
//     } else {
//       this.movies[findMovie].director = updateDetails.director;
//       this.movies[findMovie].year = updateDetails.year;
//       this.movies[findMovie].genre = updateDetails.genre;

//       return this.movies[findMovie];
//     }
//   }

//   deleteMovieByTitle(title) {
//     const findMovie = this.movies.findIndex(
//       (movie) => movie.title.toLowerCase() === title.toLowerCase()
//     );

//     if (findMovie !== -1) {
//       this.movies.splice(findMovie, 1);
//     } else {
//       return "no movie deleted";
//     }
//   }
// }

// const a = new Movies();
// a.addMovie("Lalaland", "x", 2016, "romance");
// console.log(a.getAllMovies());
// a.deleteMovieByTitle("Lalaland");
// console.log(a.getAllMovies());

console.log('------------------------------------------------------');

// class Movies {
//   constructor() {
//     this.movies = [];
//   }

//   getAllMovies() {
//     return this.movies;
//   }

//   addMovie(title, director, year, genre) {
//     if (
//       title === undefined ||
//       director === undefined ||
//       year === undefined ||
//       genre === undefined
//     ) {
//       return undefined;
//     }

//     const isDuplicate = this.movies.some(
//       (movie) =>
//         movie.title.toLowerCase() === title.toLowerCase() &&
//         movie.director.toLowerCase() === director.toLowerCase()
//     );

//     if (isDuplicate) {
//       return undefined;
//     } else {
//       const newMovies = {
//         title: title,
//         director: director,
//         year: year,
//         genre: genre,
//       };
//       this.movies.push(newMovies)
//       return newMovies
//     }
//   }

//   updateMovie(title, updateDetails) {
//     const findMovies = this.movies.find((movie) => movie.title.toLowerCase() === this.movies.title.toLowerCase())
    
//     if (!findMovies) {
//       return undefined
//     } else {
//       this.movies[findMovies].director = updateDetails.director
//       this.movies[findMovies].year = updateDetails.year
//       this.movies[findMovies].genre = updateDetails.genre

//     }
//     return this.movie[findMovies]
//   }

//   deleteMovieByTitle(title) {
//     const findIndex = this.movies.findIndex((movie) => movie.title.toLowerCase === this.movies.title.toLowerCase)
//     if(findIndex !== -1) {
//       this.movies.splice(findIndex,1)
//     } else {
//       return 'no movie deleted'
//     }

//   }
  
   
// }

// const newMovie = new Movies()
// console.log(newMovie.addMovie('LalaLand', 'Aaa', 2015, 'zzz'));
// newMovie.addMovie('Queen', 'bbba', 2025, 'eez')
// console.log(newMovie.getAllMovies());

// module.exports = Movies;

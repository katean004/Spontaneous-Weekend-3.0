import React from "react";
function Movie() {
  return (
    <div>
      <h1>Movie</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}

// make this a stateful component; get movie, store in state of component(object{}) in .then format movie with data points
// ON click the movie will be shown
//         console.log(moreResponse);
//         //   Create variables.
//         const posterImage = randomMovie.poster_path;
//         const title = randomMovie.title;
//         const synopsis = randomMovie.overview;
//         const runTime = moreResponse.runtime;
//         // const genre = moreResponse.genres.name;
//         const release = randomMovie.release_date;
//         console.log(runTime, "run time of movie");
//         const genreNames = [];
//         for (let i = 0; i < moreResponse.genres.length; i++) {
//           genreNames.push(moreResponse.genres[i].name);
//         }
//         const homepage = moreResponse.homepage;

// API.getMovie(genre)
//         .then(res => {
//             // console.log(res.data);
//             const formattedMovie = formatResults(res.data);
//             this.setState({movieResult: formattedMovie});
//         })
//         .catch(err => console.log(err));

//       const formattedCompany = {
//         name: dataPath[0].name,
//         logo: dataPath[0].squareLogo,
//         industry: dataPath[0].industry,
//         ceo: dataPath[0].ceo && dataPath[0].ceo.name
//             ? dataPath[0].ceo.name
//             : ['Could not find CEO'],
//         ceoPic: dataPath[0].ceo.image && dataPath[0].ceo.image.src
//             ? dataPath[0].ceo.image.src
//             : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/170px-No_image_available.svg.png',
//         overall: dataPath[0].overallRating,
//         description: dataPath[0].ratingDescription,
//         opportunities: dataPath[0].careerOpportunitiesRating,
//         compensation: dataPath[0].compensationAndBenefitsRating,
//         culture: dataPath[0].cultureAndValuesRating,
//         totalRatings: dataPath[0].numberOfRatings,
//         workLife: dataPath[0].workLifeBalanceRating,
//         recommended: dataPath[0].recommendToFriendRating,
//         reviews: glassdoorApiResults.response.attributionURL,
//         website: dataPath[0].website,
//         topReview: dataPath[0].featuredReview && dataPath[0].featuredReview.headline
//             ? dataPath[0].featuredReview.headline
//             : ['No featured review found, click "see more reviews" to visit Glassdoor and read what employees have said about this company'],
//         ceoRating: dataPath[0].ceo && dataPath[0].ceo.name && dataPath[0].ceo.numberOfRatings
//             ? dataPath[0].ceo.pctApprove
//             : dataPath[0].ceo && dataPath[0].ceo.name
//             ? "No Ceo Data"
//             : "",
//     };
//
//     return formattedMovie;
// };

export default Movie;

const API_KEY = "2de83306122fa36aff1ce01a662b07b2";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`
    ///fetchTopRated: ``,
};
export default requests;

function extractDesiredFields(data) {
  const {
    id,
    title,
    url,
    genres,
    totalEpisodes,
    image,
    releaseDate,
    description,
  } = data;

  return {
    id,
    title,
    url,
    genres,
    totalEpisodes,
    image,
    releaseDate,
    description,
  };
}

module.exports = { extractDesiredFields };

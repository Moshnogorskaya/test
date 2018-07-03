function cutString(string, desiredLength) {
  if (!string || string.length < desiredLength) {
    return string;
  }
  return `${string.slice(0, desiredLength)}...`;
}

function prepareDataToDisplay(repos, savedRepos) {
  const newRepos = {};
  repos.forEach((repo) => {
    const newRepo = Object.assign({}, repo);
    newRepo.topics = newRepo.topics.slice(0, 4);
    newRepo.description = cutString(repo.description, 90);
    newRepo.saved = !!savedRepos[newRepo.id];
    newRepos[repo.id] = newRepo;
  });
  return newRepos;
}

export default prepareDataToDisplay;

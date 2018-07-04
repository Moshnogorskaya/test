function cutString(string, desiredLength) {
  if (!string || string.length < desiredLength) {
    return string;
  }
  return `${string.slice(0, desiredLength)}...`;
}

function prepareDataToDisplay(repos, savedRepos) {
  const newRepos = {};
  repos.forEach((repo) => {
    const newRepo = {
      ...repo,
      topics: repo.topics.slice(0, 4),
      description: cutString(repo.description, 90),
      saved: !!savedRepos[repo.id],
    };

    newRepos[repo.id] = newRepo;
  });
  return newRepos;
}

export default prepareDataToDisplay;

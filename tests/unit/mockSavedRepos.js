import repo from './mockRepo';

const savedRepo = Object.assign({}, repo);
savedRepo.saved = true;

const savedRepos = {
  8: savedRepo,
  9: savedRepo,
  10: savedRepo,
  11: savedRepo,
  12: savedRepo,
  6: savedRepo,
  13: savedRepo,
};

export default savedRepos;

import React from 'react';
import { IUserRepo } from '../../types/types';

type RepoInfoProps = {
  repo: IUserRepo;
};

export const RepoInfo: React.FC<RepoInfoProps> = ({ repo }) => {
  return (
    <div className="repo-item">
      <a href={repo.html_url} target="_blank">
        <h4>{repo.name}</h4>
        <div>
          <div>{repo.forks} Forks</div>
          <div>{repo.stargazers_count} Stars</div>
        </div>
      </a>
    </div>
  );
};

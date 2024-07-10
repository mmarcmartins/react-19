"use client"
import React, { use } from 'react';


export const Infos = ({repoPromise}) => {
  const data = use(repoPromise);  
  return(
    <>
    {
      data.map((repo) =>
      <li key={repo.name}>
        {repo.name}
      </li>
      )
    }
    </>
  );
}
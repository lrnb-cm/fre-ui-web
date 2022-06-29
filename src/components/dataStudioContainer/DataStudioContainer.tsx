import React from 'react';

export default function DataStudioContainer() {
  const company = 'BigLii';
  return (
    <div>
      <iframe
        // width="600"
        height="500"
        src={`https://datastudio.google.com/embed/reporting/725b4254-bc68-43e4-a8e4-17ded596c35f/page/xDDwC?params=%7B"ds12.company":"${company}"%7D`}
        frameBorder="0"
        style={{
          border: '0px',
          width: '100%',
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
}

import React from 'react';
// import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

const description = (
  <div className="description-list">
    <h2>Package ContentsL</h2>
      <ul>
        <li>
          Integrated With:
          <ul>
            <li>React-Redux (App State Management)</li>
            <li>Semantic UI (User Interface)</li>
            <li>GraphQL & Apollo (Data/API Manangement)</li>
            <li>GraphCool (BAAS)</li>
            <li>Docker (Hosting & Deployment)</li>
            <li>Nivo (Graphing Library)</li>
            <li>Jest (Automated Testing)</li>
            <li>Webpack (Bundling)</li>
            <li>Babel (Transpiling)</li>
            <li>SCSS (CSS Extender)</li>
            <li>ESLint (Standadized Formatting)</li>
            <li>Axios (HTTP Actions)</li>
            <li>JSON Server (HTTP Mocking)</li>
          </ul>
        </li>
        <br />
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ul>
  </div>
);

const HomePage = () => {
  return (
    <div className="content">
      <Segment className="kit-description-card">
        {description}
      </Segment>
    </div>
  );
};

export default HomePage;

import React from "react";
import Profile from "Container/Profile/Profile.js";
import Layout from "hoc/Layout/Layout";
import Auxillary from "hoc/Auxillary/Auxillary";
function App() {
  return (
    <Auxillary>
      <Layout></Layout>
      <Profile />
    </Auxillary>
  );
}

export default App;

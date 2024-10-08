import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as hootService from "../../services/hootService";

const HootDetails = () => {
  const [hoot, setHoot] = useState(null);
  // hootId comes from the route
  const { hootId } = useParams();
  //   console.log(hootId, "Hoot Id");

  useEffect(() => {
    async function getHoot() {
      // hootId comes from the params, and thats what we show
      // request needs in order to make the http request to express
      const hootData = await hootService.show(hootId);
      setHoot(hootData);
    }

    getHoot();
  }, [hootId]); // run out useEffect everytime the id in the url changes, so we get the hoot that represents that id from the server

  // Check to see if the hoot is loaded
  if (!hoot) return <main>Loading...</main>;

  return (
    <main>
      <header>
        <p>{hoot.category.toUpperCase()}</p>
        <h1>{hoot.title}</h1>
        <p>{hoot.author.username}</p>
      </header>

      <p>{hoot.text}</p>

      <section>
        <h2>comments</h2>
        {/* {hoot.comments.length === 0 ? <p>There are no comments</p> : (Do the map in here for your comments)} */}
        {!hoot.comments.length && <p>There are no comments</p>}

        {hoot.comments.map((comment) => (
          <article key={comment._id}>
            <header>
              <p>{comment.author.username}</p>
            </header>
            <p>{comment.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default HootDetails;

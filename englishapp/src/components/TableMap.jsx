import Table from "./Table/Table.jsx";
import { useSelector, useDispatch } from "react-redux";
import AddWord from "./AddWords/AddWords.jsx";
import { useEffect } from "react";
import { getWords } from "../redux/action.js";
import GET from "../redux/GET.js";

function TableMap() {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    async function get() {
      const data = await GET.getWords();
      dispatch(getWords(data));
    }
    get();
  }, [dispatch]);

  return (
    <main>
      <AddWord />
      <div className="container__cards">
        {posts.map((card, i) => (
          <Table
            key={i}
            num={i + 1}
            id={card.id}
            number={card.number}
            english={card.english}
            transcription={card.transcription}
            russian={card.russian}
            tags={card.tags}
          />
        ))}
      </div>
    </main>
  );
}

export default TableMap;

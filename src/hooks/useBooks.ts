import axios from "axios";
import { useQuery } from "react-query";

export const useBooks = () => {
  return useQuery("books", () =>
    axios
      .get(
        "http://private-anon-701b5d5e14-bookstore.apiary-mock.com/data/books"
      )
      .then((res) => res.data)
  );
};

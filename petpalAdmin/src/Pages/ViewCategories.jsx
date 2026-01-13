import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../firebase";

function ViewCategories() {
  useEffect(function () {
    getData();
  }, []);

  async function getData() {
    let colRef = collection(db, "categories");

    onSnapshot(colRef, function (data) {
      console.log(data.docs);
    });
  }

  return <h1>View Categories</h1>;
}

export default ViewCategories;

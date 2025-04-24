const getStoredBook = () => {
  const storeBookSTR = localStorage.getItem("readList");
  if (storeBookSTR) {
      const storedBookData = JSON.parse(storeBookSTR);
      return storedBookData;
  } else {
      return [];
  }
};

const addTostoredDB = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
      alert("Bhai, ei ID already exists!");
  } else {
      storedBookData.push(id);
      console.log(storedBookData);
      const data = JSON.stringify(storedBookData);
      localStorage.setItem("readList", data);
  }
};



export { addTostoredDB, getStoredBook, };

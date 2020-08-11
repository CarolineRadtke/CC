import axios from 'axios';

export const thisTest = async (input: []) => {
  await deleteAll(input);
  console.log('deleted all');
  await helper(input);
  location.reload();
};

const helper = async (req: []) => {
  const body = JSON.stringify(req);
 
  let arr: [] = [];
  arr = req;
  return arr.map(async (item) => {
    await axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: 'http://localhost:3000/events',
      data: JSON.stringify(item),
    })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  });
};

const deleteAll = async (req: []) => {
  console.log('delete');
  let arr: [] = [];
  arr = req;
  let test = await axios.get('http://localhost:3000/events');
  console.log(test);
  debugger;

  test.data.map(async (item) => {
    if (item.id) {
      await axios({
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        url: `http://localhost:3000/events/${item.id}`,
      })
        .then((resp) => console.log('rest', resp))
        .catch((err) => console.error('Error Delete', err));
    }
  });
};

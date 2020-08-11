import axios from 'axios';

export const layOutDay = async (input: []) => {
  await deleteAll(input);
  // debugger;
  await setNewEvents(input);
  location.reload();
};

const setNewEvents = async (req: []) => {
  let arr: [] = req;

  arr.map(async (item) => {
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
  let test = await axios.get('http://localhost:3000/events');

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

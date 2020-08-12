import axios from 'axios';

/**
 * Deletes all current events to enter the new ones given in the console
 * @param input : Array of Events
 */
export const layOutDay = async (input: []) => {
  await deleteAll();
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
      .then((resp) => console.log('Response add Events: ', resp))
      .catch((err) => console.error('Error add Events: ', err));
  });
};

const deleteAll = async () => {
  let test = await axios.get('http://localhost:3000/events');

  test.data.map(async (item) => {
    if (item.id) {
      await axios({
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        url: `http://localhost:3000/events/${item.id}`,
      })
        .then((resp) => console.log('Response Delete: ', resp))
        .catch((err) => console.error('Error Delete: ', err));
    }
  });
};

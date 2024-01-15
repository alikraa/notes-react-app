import axios from 'axios';

export const getNotes = async () => {
  try {
    const response = await axios.get(
      'https://6599ace3652b843dea530f0b.mockapi.io/notes'
    );

    return response.data.reverse();
  } catch (error) {
    return (error as Error).message;
  }
};

export const postNote = async (newNote) => {
  try {
    const response = await axios.post(
      'https://6599ace3652b843dea530f0b.mockapi.io/notes',
      newNote
    );

    return response.data;
  } catch (error) {
    return (error as Error).message;
  }
};

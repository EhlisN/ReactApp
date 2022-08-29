import axios from 'axios';

export default axios.create({
  baseURL:
    'https://api.unsplash.com/photos/random?query=morning&client_id=aUHA9v-u6K-IJNzT-8JMSp1odPVZYBQe5JbJ7cbKMdw',
});

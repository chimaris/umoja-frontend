// import { getLocalStorageItem} from '~/utils/storage';

// export default function ({ $axios, store }) {
//     $axios.onRequest((config) => {
//       const token = getLocalStorageItem('token', null);
//       if (token) {
//         config.headers.common['Authorization'] = `Bearer ${token}`;
//       }
//       return config;
//     });
//   }
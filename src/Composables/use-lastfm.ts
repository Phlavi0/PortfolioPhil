import type {recentlisten} from "./types";
import { ref, onMounted, onUnmounted } from 'vue';

const API_URL = 'https://ws.audioscrobbler.com/2.0/?';
const params = new URLSearchParams({method:'user.getrecenttracks', user:'phlavi0', api_key: '4e94a5a7ca331cdc19c4f269b0abecc0',totalpages:'10', format:'json'});
const tracks = ref<recentlisten[]>([]);
export function useLastfm(){
    let intervalId = null;
    onMounted(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(API_URL + params);
            const data = await response.json();
            tracks.value = data.recenttracks.track;
          } catch (error) {
            console.error(error);
          }
        };
      
        // Fetch data immediately when mounted
        fetchData();
      
        // Set up an interval to fetch data every 5 seconds
        intervalId = setInterval(fetchData, 5000);
      });
      
      onUnmounted(() => {
        // Clear the interval when the component is unmounted to prevent memory leaks
        if (intervalId) {
          clearInterval(intervalId);
        }
      });

    return {tracks}
}

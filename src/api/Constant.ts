import axios, { AxiosInstance }  from 'axios';

export const AXIOS: AxiosInstance = axios.create({
      baseURL: "https://www.dnd5eapi.co/api/spells/",

});
  

export const URL_SEARCH_NAME: string = '?name=';
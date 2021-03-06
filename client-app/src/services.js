import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 9000,
  headers: {
    "Content-Type": "application/json"
  }
});

const setToken = (token = null) =>
  (axiosInstance.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : "");

const responseData = res => res.data;

const requests = {
  get: url => axiosInstance.get(`${url}`).then(responseData),
  post: (url, body) => axiosInstance.post(`${url}`, body).then(responseData),
  put: (url, body) => axiosInstance.put(`${url}`, body).then(responseData),
  del: url => axiosInstance.delete(`${url}`).then(responseData)
};

const omitSlug = article => Object.assign({}, article, { slug: undefined });

const Articles = {
  all: page => requests.get(`/articles?limit=10`),
  get: slug => requests.get(`/articles/${slug}`),
  create: article => requests.post("/articles", { article }),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  delete: slug => requests.del(`/articles/${slug}`)
};

const Comments = {
  forArticle: slug => requests.get(`/articles/${slug}/comments`),
  create: (slug, body) =>
    requests.post(`/articles/${slug}/comments`, { comment: body }),
  delete: commentid => requests.delete(`/articles/comments/commentid}`)
};

const Auth = {
  currentUser: () => requests.get("/user"),
  login: (email, password) =>
    requests.post("/users/login", { user: { email, password } }),
  register: (username, email, password) =>
    requests.post("/users", { user: { username, email, password } }),
  save: user => requests.put("/user", { user })
};

const Teams = {
  get: teamid => requests.get(`/teams/${teamid}`),
  getTeams: email => requests.get(`/teams/user/${email}`),
  post: (email, name, description, sport) =>
    requests.post(`/teams/${email}`, { team: { name, description, sport } }),
  delete: teamid => requests.delete(`/teams/${teamid}`)
};

const Players = {
  get: teamid => requests.get(`players/team/${teamid}`),
  post: (teamid, { player: { name, position } }) =>
    requests.post(`players/${teamid}`),
  delete: playerid => requests.delete(`/players/playerid`)
};

const Events = {
  get: teamid => requests.get(`events/team/${teamid}`),
  post: (teamid, { player: { name, position } }) =>
    requests.post(`events/${teamid}`),
  delete: eventid => requests.delete(`eventid`)
};

export default {
  Articles,
  Auth,
  Comments,
  setToken,
  Teams,
  Players,
  Events
};

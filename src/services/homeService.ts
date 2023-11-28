import { apiPublic } from "../api";

const homeSerive = {
  getAll: () => apiPublic.get("/data"),
};

export default homeSerive;

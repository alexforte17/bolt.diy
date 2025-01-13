export default {
  async fetch(req, env) {
    const worker = env.dispatcher.get("my-github-worker");
    return worker.fetch(req);
  }
};

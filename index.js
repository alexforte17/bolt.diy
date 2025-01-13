export default {
  async fetch(req, env) {
    const worker = env.dispatcher.get("my-github-worker");
    return worker.fetch(req);
  }
};



export class MyDurableObject {
  constructor(state, env) {
    this.state = state;
    this.env = env;
  }

  async fetch(request) {
    return new Response('Hello from MyDurableObject!');
  }
}
export default {
  async fetch(req, env) {
    const worker = env.dispatcher.get("my-github-worker");
    return worker.fetch(req);
  },
};

export { MyDurableObject };

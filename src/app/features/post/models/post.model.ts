export class Post {
  userId = 0;
  id = 0;
  title = "";
  body = "";

  static create(input?: Partial<Post>) {
    const model = new Post();

    model.userId = input?.userId ?? model.userId;
    model.id = input?.id ?? model.id;
    model.title = input?.title ?? model.title;
    model.body = input?.body ?? model.body;

    return model;
  }
}

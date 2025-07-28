export class Post {
  userId = 0;
  id = 0;
  title = "";
  body = "";

  static create(input?: any) {
    const m = new Post();

    m.userId = input?.userId ?? m.userId;
    m.id = input?.id ?? m.id;
    m.title = input?.title ?? m.title;
    m.body = input?.body ?? m.body;

    return m;
  }
}

export class Geo {
  lat = "";
  lng = "";

  static create(input?: any): Geo {
    const m = new Geo();
    m.lat = input?.lat ?? m.lat;
    m.lng = input?.lng ?? m.lng;
    return m;
  }
}

export class Address {
  street = "";
  suite = "";
  city = "";
  zipcode = "";
  geo: Geo = new Geo();

  static create(input?: any): Address {
    const m = new Address();
    m.street = input?.street ?? m.street;
    m.suite = input?.suite ?? m.suite;
    m.city = input?.city ?? m.city;
    m.zipcode = input?.zipcode ?? m.zipcode;
    m.geo = Geo.create(input?.geo);
    return m;
  }
}

export class Company {
  name = "";
  catchPhrase = "";
  bs = "";

  static create(input?: any): Company {
    const m = new Company();
    m.name = input?.name ?? m.name;
    m.catchPhrase = input?.catchPhrase ?? m.catchPhrase;
    m.bs = input?.bs ?? m.bs;
    return m;
  }
}

export class User {
  id = 0;
  name = "";
  username = "";
  email = "";
  address: Address = new Address();
  phone = "";
  website = "";
  company: Company = new Company();

  static create(input?: any): User {
    const m = new User();
    m.id = input?.id ?? m.id;
    m.name = input?.name ?? m.name;
    m.username = input?.username ?? m.username;
    m.email = input?.email ?? m.email;
    m.address = Address.create(input?.address);
    m.phone = input?.phone ?? m.phone;
    m.website = input?.website ?? m.website;
    m.company = Company.create(input?.company);
    return m;
  }
}

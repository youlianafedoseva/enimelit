function change(name, changes) {
  for (const key in changes) {
    if (Object.prototype.hasOwnProperty.call(name, key)) {
      name[key] = changes[key];
    }
  }
  return name;
}

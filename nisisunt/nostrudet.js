  Tb();
  w(S);
  w(J);
  lf();
  ...
  if (0 !== (a & 65536) && 0 === (a & 128)) {
    b.flags = a & -65537 | 128;
    return b;
  }
  return null;
  
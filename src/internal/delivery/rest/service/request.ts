function getPagination(req) {
  const page: number = Number(req.query.page) || 1;
  const limit: number = Number(req.query.limit) || 10;

  return { page, limit };
}

export { getPagination };

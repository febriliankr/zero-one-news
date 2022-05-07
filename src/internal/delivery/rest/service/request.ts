function getPagination(req) {
  const page: number = Number(req.query.page) || 1;
  const limit: number = Number(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  return { page, limit, offset };
}

export { getPagination };
